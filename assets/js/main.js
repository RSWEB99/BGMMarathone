// Shared site behavior: mobile menu, cookie banner, newsletter, header shadow, search redirect

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.remove("translate-x-full"));
  }
  if (menuCloseBtn && mobileMenu) {
    menuCloseBtn.addEventListener("click", () => mobileMenu.classList.add("translate-x-full"));
  }

  // Sticky header shadow
  const header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 8) header.classList.add("shadow-md");
      else header.classList.remove("shadow-md");
    });
  }

  // Cookie consent banner
  const cookieBanner = document.getElementById("cookieBanner");
  if (cookieBanner) {
    const consent = localStorage.getItem("rp_cookie_consent");
    if (!consent) cookieBanner.classList.remove("hidden");
    document.querySelectorAll("[data-cookie-accept]").forEach(btn => {
      btn.addEventListener("click", () => {
        localStorage.setItem("rp_cookie_consent", "all");
        cookieBanner.classList.add("hidden");
      });
    });
    const necessaryBtn = document.getElementById("cookieNecessaryBtn");
    if (necessaryBtn) {
      necessaryBtn.addEventListener("click", () => {
        localStorage.setItem("rp_cookie_consent", "necessary");
        cookieBanner.classList.add("hidden");
      });
    }
  }

  // Newsletter subscribe (demo only)
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector("button[type=submit]");
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = "Processing...";
      setTimeout(() => {
        btn.innerHTML = "Subscribed ✓";
        newsletterForm.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 2500);
      }, 900);
    });
  }

  // Search bars -> redirect to events.html with query
  document.querySelectorAll("[data-search-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      const q = encodeURIComponent(input.value.trim());
      window.location.href = "events.html" + (q ? "?q=" + q : "");
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("hidden", window.scrollY < 400);
    });
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
