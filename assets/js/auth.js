// Demo-only auth interactions for login.html and register.html (no backend).

document.addEventListener("DOMContentLoaded", () => {
  // Login page tabs
  const tabEmail = document.getElementById("tabEmail");
  const tabMobile = document.getElementById("tabMobile");
  const emailForm = document.getElementById("emailForm");
  const mobileForm = document.getElementById("mobileForm");

  if (tabEmail && tabMobile) {
    tabEmail.addEventListener("click", () => {
      tabEmail.classList.add("bg-white", "shadow", "text-rose-600");
      tabEmail.classList.remove("text-gray-500");
      tabMobile.classList.remove("bg-white", "shadow", "text-rose-600");
      tabMobile.classList.add("text-gray-500");
      emailForm.classList.remove("hidden");
      mobileForm.classList.add("hidden");
    });
    tabMobile.addEventListener("click", () => {
      tabMobile.classList.add("bg-white", "shadow", "text-rose-600");
      tabMobile.classList.remove("text-gray-500");
      tabEmail.classList.remove("bg-white", "shadow", "text-rose-600");
      tabEmail.classList.add("text-gray-500");
      mobileForm.classList.remove("hidden");
      emailForm.classList.add("hidden");
    });
  }

  if (emailForm) {
    emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showLoginSuccess();
    });
  }

  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const otpBlock = document.getElementById("otpBlock");
  const mobileInput = document.getElementById("mobileInput");
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener("click", () => {
      if (!mobileInput.checkValidity()) { mobileInput.reportValidity(); return; }
      otpBlock.classList.remove("hidden");
      sendOtpBtn.textContent = "Resend OTP";
      document.querySelector(".otpDigit").focus();
    });
  }

  // OTP auto-advance
  document.querySelectorAll(".otpDigit").forEach((input, idx, all) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
      if (input.value && all[idx + 1]) all[idx + 1].focus();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && all[idx - 1]) all[idx - 1].focus();
    });
  });

  if (mobileForm) {
    mobileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const otp = [...document.querySelectorAll(".otpDigit")].map(i => i.value).join("");
      const otpError = document.getElementById("otpError");
      if (otp === "1234") {
        otpError.classList.add("hidden");
        showLoginSuccess();
      } else {
        otpError.classList.remove("hidden");
      }
    });
  }

  function showLoginSuccess() {
    const successEl = document.getElementById("loginSuccess");
    successEl.classList.remove("hidden");
    successEl.textContent = "✓ Logged in successfully (demo) — redirecting...";
    setTimeout(() => { window.location.href = "index.html"; }, 1200);
  }

  // Register page
  const registerForm = document.getElementById("registerForm");
  const pwInput = document.getElementById("regPassword");
  const pwBar = document.getElementById("pwStrengthBar");
  const pwLabel = document.getElementById("pwStrengthLabel");

  if (pwInput) {
    pwInput.addEventListener("input", () => {
      const val = pwInput.value;
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const pct = (score / 4) * 100;
      const colors = ["bg-rose-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"];
      pwBar.style.width = pct + "%";
      pwBar.className = "h-full transition-all " + (colors[score - 1] || "bg-gray-200");
      const labels = ["Weak", "Fair", "Good", "Strong"];
      pwLabel.textContent = val ? (labels[score - 1] || "Too short") : "Password strength";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const successEl = document.getElementById("registerSuccess");
      successEl.classList.remove("hidden");
      successEl.textContent = "✓ Account created successfully (demo) — redirecting to login...";
      setTimeout(() => { window.location.href = "login.html"; }, 1200);
    });
  }
});
