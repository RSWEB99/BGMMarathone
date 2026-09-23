// Event details page: populate content from query param, handle tabs & like button

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const ev = RP.getById(params.get("id"));

  if (!ev) {
    document.getElementById("eventNotFound").classList.remove("hidden");
    return;
  }
  document.getElementById("eventContent").classList.remove("hidden");
  document.title = ev.name + " — RunPulse India";

  const heroBanner = document.getElementById("heroBanner");
  heroBanner.className = "relative bg-gradient-to-br " + ev.gradient + " text-white";

  document.getElementById("eventName").textContent = ev.name;
  document.getElementById("eventMeta").textContent = `${ev.dateLabel} · ${ev.venue}, ${ev.city}`;

  const closed = ev.status === "closed";
  const statusBadge = document.getElementById("statusBadge");
  statusBadge.textContent = closed ? "REGISTRATION CLOSED" : "REGISTRATION OPEN";
  statusBadge.className = (closed ? "bg-gray-700" : "bg-emerald-500") + " font-bold px-2.5 py-1 rounded-full";
  if (ev.trending) document.getElementById("trendingBadge").classList.remove("hidden");

  document.getElementById("likeCount").textContent = ev.likes;
  document.getElementById("likeBtn").addEventListener("click", function () {
    const el = document.getElementById("likeCount");
    const liked = this.dataset.liked === "1";
    el.textContent = liked ? ev.likes : ev.likes + 1;
    this.dataset.liked = liked ? "0" : "1";
    this.classList.toggle("bg-rose-600", !liked);
  });

  // Overview
  document.getElementById("eventDescription").innerHTML = ev.description.map(p => `<p>${p}</p>`).join("");
  document.getElementById("eventFacilities").innerHTML = ev.facilities.map(f => `<li class="flex items-center gap-2"><span class="text-emerald-500">✓</span>${f}</li>`).join("");
  document.getElementById("venueFacilities").innerHTML = ev.venueFacilities.map(f => `<span class="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">${f}</span>`).join("");
  document.getElementById("eventAwards").innerHTML = ev.awards.map(f => `<span class="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full">🏅 ${f}</span>`).join("");

  // Tickets
  const ticketsWrap = document.getElementById("tab-tickets");
  ticketsWrap.innerHTML = ev.tickets.map(t => `
    <div class="flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
      <div>
        <p class="text-xs font-bold text-indigo-600 uppercase tracking-wide">${t.name}</p>
        <p class="text-sm font-semibold text-gray-900 mt-0.5">${t.type}</p>
        <p class="text-xs text-gray-500 mt-1 max-w-md">${t.desc}</p>
        <p class="text-xs font-semibold ${closed ? "text-gray-400" : "text-emerald-600"} mt-2">${closed ? "Registration Closed" : "Tickets available"}</p>
      </div>
      <div class="text-right shrink-0">
        <p class="font-display font-bold text-lg">${RP.formatINR(t.price)}</p>
        ${closed
          ? `<button disabled class="mt-2 bg-gray-200 text-gray-400 text-sm font-semibold px-5 py-2 rounded-full cursor-not-allowed">Closed</button>`
          : `<a href="checkout.html?event=${ev.id}&ticket=${t.id}" class="mt-2 inline-block rp-btn-primary text-white text-sm font-semibold px-5 py-2 rounded-full">Register →</a>`
        }
      </div>
    </div>
  `).join("");

  // Route
  document.getElementById("routeVenue").textContent = ev.venue;
  document.getElementById("routeAddress").textContent = ev.address;

  // Gallery (placeholder tiles)
  document.getElementById("galleryGrid").innerHTML = [1, 2, 3, 4].map(n => `
    <div class="h-28 sm:h-32 rounded-xl bg-gradient-to-br ${ev.gradient} flex items-center justify-center text-white text-xs font-semibold opacity-90">Photo ${n}</div>
  `).join("");

  // Organizer
  document.getElementById("organizerInitial").textContent = ev.organizer.name.charAt(0);
  document.getElementById("organizerName").textContent = ev.organizer.name;
  document.getElementById("organizerEmail").textContent = "✉ " + ev.organizer.email;
  document.getElementById("organizerPhone").textContent = "☎ " + ev.organizer.phone;

  // Sidebar
  document.getElementById("regEndsLabel").textContent = ev.regEndsLabel;
  document.getElementById("sidebarDate").textContent = `${ev.dateLabel} at ${ev.startTime}`;
  document.getElementById("sidebarVenue").textContent = `${ev.venue}, ${ev.city}`;
  document.getElementById("sidebarTickets").textContent = `${ev.tickets.length} ticket option${ev.tickets.length > 1 ? "s" : ""} from ${RP.formatINR(ev.priceMin)}`;
  document.getElementById("sidebarViewed").textContent = `${ev.viewedRecently} people viewed this recently`;

  const cta = document.getElementById("registerCta");
  if (closed) {
    cta.textContent = "Registration Closed";
    cta.classList.add("pointer-events-none", "opacity-50");
  }

  // Tabs
  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll("[id^='tab-']").forEach(panel => panel.classList.add("hidden"));
      document.getElementById("tab-" + btn.dataset.tab).classList.remove("hidden");
    });
  });
  document.getElementById("registerCta").addEventListener("click", (e) => {
    if (closed) return;
    e.preventDefault();
    tabs.forEach(b => b.classList.remove("active"));
    document.querySelector('[data-tab="tickets"]').classList.add("active");
    document.querySelectorAll("[id^='tab-']").forEach(panel => panel.classList.add("hidden"));
    document.getElementById("tab-tickets").classList.remove("hidden");
    document.getElementById("tab-tickets").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
