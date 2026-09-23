// Checkout flow: attendee details -> sandbox payment gateway -> confirmation
// NOTE: This is a fully simulated/sandbox payment flow for demo purposes only.
// No real payment processor is contacted and no card data leaves the browser.

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const ev = RP.getById(params.get("event"));
  const ticket = ev ? RP.getTicket(ev.id, params.get("ticket")) : null;

  if (!ev || !ticket) {
    document.getElementById("notFoundState").classList.remove("hidden");
    return;
  }
  document.getElementById("checkoutState").classList.remove("hidden");

  const fee = Math.round(ticket.price * 0.02);
  const gst = Math.round(fee * 0.18);
  const total = ticket.price + fee + gst;

  // Order summary
  document.getElementById("summaryEventName").textContent = ev.name;
  document.getElementById("summaryEventMeta").textContent = `${ev.dateLabel} · ${ev.city}`;
  document.getElementById("summaryTicketName").textContent = ticket.name;
  document.getElementById("summaryTicketPrice").textContent = RP.formatINR(ticket.price);
  document.getElementById("summaryFee").textContent = RP.formatINR(fee);
  document.getElementById("summaryGst").textContent = RP.formatINR(gst);
  document.getElementById("summaryTotal").textContent = RP.formatINR(total);
  document.getElementById("payAmountLabel").textContent = RP.formatINR(total);

  let attendee = null;

  // Step 1 -> Step 2
  document.getElementById("attendeeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    attendee = Object.fromEntries(new FormData(e.target).entries());
    goToStep(2);
  });

  document.getElementById("backToStep1").addEventListener("click", () => goToStep(1));

  function goToStep(n) {
    [1, 2, 3].forEach(i => {
      document.getElementById("step" + i).classList.toggle("hidden", i !== n);
      const ind = document.getElementById("stepInd" + i);
      const circle = ind.querySelector("span");
      if (i < n) { ind.classList.add("text-emerald-600"); ind.classList.remove("text-gray-400","text-rose-600"); circle.className = "h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs"; circle.textContent = "✓"; }
      else if (i === n) { ind.classList.add("text-rose-600"); ind.classList.remove("text-gray-400","text-emerald-600"); circle.className = "h-6 w-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs"; circle.textContent = i; }
      else { ind.classList.add("text-gray-400"); ind.classList.remove("text-rose-600","text-emerald-600"); circle.className = "h-6 w-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs"; circle.textContent = i; }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Payment method tabs
  const payTabs = document.querySelectorAll(".paytab-btn");
  payTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      payTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      ["card", "upi", "netbanking"].forEach(m => document.getElementById("pay-" + m).classList.toggle("hidden", m !== btn.dataset.payTab));
    });
  });

  // Card number formatting
  const cardNumberEl = document.getElementById("cardNumber");
  cardNumberEl.addEventListener("input", () => {
    let v = cardNumberEl.value.replace(/\D/g, "").slice(0, 16);
    cardNumberEl.value = v.replace(/(.{4})/g, "$1 ").trim();
  });
  const cardExpiryEl = document.getElementById("cardExpiry");
  cardExpiryEl.addEventListener("input", () => {
    let v = cardExpiryEl.value.replace(/\D/g, "").slice(0, 4);
    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
    cardExpiryEl.value = v;
  });
  document.getElementById("cardCvv").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
  });

  function luhnValid(num) {
    const digits = num.replace(/\D/g, "");
    if (digits.length !== 16) return false;
    let sum = 0, alt = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let n = parseInt(digits[i], 10);
      if (alt) { n *= 2; if (n > 9) n -= 9; }
      sum += n; alt = !alt;
    }
    return sum % 10 === 0;
  }

  function expiryValid(mmYY) {
    const m = mmYY.match(/^(\d{2})\/(\d{2})$/);
    if (!m) return false;
    const month = parseInt(m[1], 10), year = 2000 + parseInt(m[2], 10);
    if (month < 1 || month > 12) return false;
    const now = new Date();
    const expDate = new Date(year, month, 0, 23, 59, 59);
    return expDate >= now;
  }

  function validatePayment() {
    const activeTab = document.querySelector(".paytab-btn.active").dataset.payTab;
    let valid = true;

    ["cardError", "expiryError", "cvvError", "upiError", "bankError"].forEach(id => document.getElementById(id).classList.add("hidden"));

    if (activeTab === "card") {
      if (!luhnValid(cardNumberEl.value)) { document.getElementById("cardError").classList.remove("hidden"); valid = false; }
      if (!expiryValid(cardExpiryEl.value)) { document.getElementById("expiryError").classList.remove("hidden"); valid = false; }
      if (document.getElementById("cardCvv").value.length !== 3) { document.getElementById("cvvError").classList.remove("hidden"); valid = false; }
      if (!document.getElementById("cardName").value.trim()) valid = false;
    } else if (activeTab === "upi") {
      const upi = document.getElementById("upiId").value.trim();
      if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upi)) { document.getElementById("upiError").classList.remove("hidden"); valid = false; }
    } else if (activeTab === "netbanking") {
      if (!document.getElementById("bankSelect").value) { document.getElementById("bankError").classList.remove("hidden"); valid = false; }
    }
    return valid;
  }

  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validatePayment()) return;

    const btn = document.getElementById("payNowBtn");
    const label = document.getElementById("payNowLabel");
    const original = label.innerHTML;
    btn.disabled = true;
    label.innerHTML = `<span class="rp-spinner inline-block align-middle mr-2"></span> Processing payment...`;

    // Simulated gateway round-trip (sandbox only — no network call, no real funds move)
    setTimeout(() => {
      const orderId = "RP" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10);
      const order = {
        orderId,
        eventId: ev.id,
        eventName: ev.name,
        ticketId: ticket.id,
        ticketName: ticket.name,
        attendee,
        amount: total,
        paymentMethod: document.querySelector(".paytab-btn.active").dataset.payTab,
        createdAt: new Date().toISOString()
      };
      RP.saveOrder(order);

      btn.disabled = false;
      label.innerHTML = original;

      document.getElementById("confOrderId").textContent = orderId;
      document.getElementById("confEvent").textContent = ev.name;
      document.getElementById("confTicket").textContent = ticket.name;
      document.getElementById("confAmount").textContent = RP.formatINR(total);
      document.getElementById("viewOrderBtn").href = "order-success.html?orderId=" + orderId;

      goToStep(3);
    }, 1600);
  });
});
