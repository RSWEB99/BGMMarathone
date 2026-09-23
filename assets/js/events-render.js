// Events listing page: filters, search, sort

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("eventsGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("filterSearch");
  const cityFilter = document.getElementById("filterCity");
  const distanceWrap = document.getElementById("filterDistance");
  const sortSelect = document.getElementById("sortBy");
  const resetBtn = document.getElementById("filterReset");

  // Populate city filter
  const cities = [...new Set(RP.events.map(e => e.city))].sort();
  cities.forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    cityFilter.appendChild(opt);
  });

  // Populate distance filter (unique ticket names)
  const distances = [...new Set(RP.events.flatMap(e => e.tickets.map(t => t.name)))].sort();
  const state = { distances: new Set() };
  distances.forEach(d => {
    const id = "dist-" + d.replace(/\s+/g, "-");
    const label = document.createElement("label");
    label.className = "flex items-center gap-1.5 border border-gray-200 rounded-full px-2.5 py-1 cursor-pointer hover:bg-gray-50";
    label.innerHTML = `<input type="checkbox" value="${d}" class="distCheck accent-rose-600"> ${d}`;
    distanceWrap.appendChild(label);
  });

  // Prefill search from ?q=
  const params = new URLSearchParams(window.location.search);
  if (params.get("q")) searchInput.value = params.get("q");

  function getFiltered() {
    let list = [...RP.events];
    const q = searchInput.value.trim().toLowerCase();
    if (q) list = list.filter(e => e.name.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q));
    if (cityFilter.value) list = list.filter(e => e.city === cityFilter.value);

    const checkedDist = [...document.querySelectorAll(".distCheck:checked")].map(c => c.value);
    if (checkedDist.length) list = list.filter(e => e.tickets.some(t => checkedDist.includes(t.name)));

    const status = document.querySelector(".filterStatus:checked").value;
    if (status) list = list.filter(e => e.status === status);

    const sort = sortSelect.value;
    if (sort === "price-asc") list.sort((a, b) => a.priceMin - b.priceMin);
    else if (sort === "price-desc") list.sort((a, b) => b.priceMin - a.priceMin);
    else list.sort((a, b) => new Date(a.date) - new Date(b.date));

    return list;
  }

  function render() {
    const list = getFiltered();
    resultsCount.textContent = `${list.length} event${list.length !== 1 ? "s" : ""} found`;
    if (!list.length) {
      grid.innerHTML = "";
      noResults.classList.remove("hidden");
      return;
    }
    noResults.classList.add("hidden");
    grid.innerHTML = list.map(ev => {
      const closed = ev.status === "closed";
      return `
      <a href="event-details.html?id=${ev.id}" class="rp-card fade-in block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${closed ? "opacity-70" : ""}">
        <div class="relative h-40 bg-gradient-to-br ${ev.gradient} flex items-center justify-center">
          ${ev.trending ? `<span class="absolute top-3 right-3 bg-white/90 text-rose-600 text-[11px] font-bold px-2 py-1 rounded-full shadow">🔥 Trending</span>` : ""}
          <span class="absolute top-3 left-3 ${closed ? "bg-gray-700 text-white" : "bg-emerald-500 text-white"} text-[11px] font-bold px-2 py-1 rounded-full shadow">${closed ? "Event Ended" : "Tickets Available"}</span>
          <span class="text-5xl">🏃‍♂️</span>
        </div>
        <div class="p-4">
          <h3 class="font-display font-bold text-base leading-snug mb-1 line-clamp-2">${ev.name}</h3>
          <p class="text-xs text-gray-500 mb-1">${ev.dateLabel} · ${ev.startTime}</p>
          <p class="text-xs text-gray-500 mb-2">📍 ${ev.venue}, ${ev.city}</p>
          <div class="flex items-center justify-between mt-3">
            <p class="text-sm font-semibold text-rose-600">${closed ? "Registration Closed" : "From " + RP.formatINR(ev.priceMin)}</p>
            <span class="text-xs font-semibold ${closed ? "text-gray-400" : "text-indigo-600"}">${ev.tickets.length} ticket option${ev.tickets.length > 1 ? "s" : ""}</span>
          </div>
        </div>
      </a>`;
    }).join("");
  }

  [searchInput, cityFilter, sortSelect].forEach(el => el.addEventListener("input", render));
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("distCheck") || e.target.classList.contains("filterStatus")) render();
  });
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    cityFilter.value = "";
    sortSelect.value = "date";
    document.querySelectorAll(".distCheck").forEach(c => c.checked = false);
    document.querySelector('.filterStatus[value=""]').checked = true;
    render();
  });

  render();
});
