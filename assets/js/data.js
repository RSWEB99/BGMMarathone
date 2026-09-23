/* Shared event data + helpers for the RunPulse India demo site */

const RP_EVENTS = [
  {
    id: "mumbai-coastal-half",
    name: "Mumbai Coastal Half Marathon 2026",
    city: "Mumbai",
    venue: "Marine Drive Promenade",
    address: "Marine Drive, Mumbai, Maharashtra 400020",
    date: "2026-01-18",
    dateLabel: "Jan 18, 2026",
    startTime: "5:00 AM",
    regEndsLabel: "Registration ends in 34 days",
    gradient: "from-rose-600 via-fuchsia-600 to-indigo-600",
    trending: true,
    featured: true,
    status: "open",
    priceMin: 700,
    priceMax: 1800,
    viewedRecently: 143,
    likes: 62,
    summary: "Run along the iconic Queen's Necklace as the sun rises over the Arabian Sea. Mumbai's most scenic half marathon returns for its 6th edition.",
    description: [
      "The Mumbai Coastal Half Marathon brings together thousands of runners for a flat, fast, and unforgettable route along Marine Drive and the coastal road.",
      "Registration includes a timing chip, finisher medal, event T-shirt, breakfast, and a digital finisher certificate.",
      "Cut-off times: Half Marathon - 3 hours 30 minutes | 10K - 2 hours | 5K - No cut-off."
    ],
    facilities: ["Run Surface: Road", "Profile: Flat", "Route Measurement: Chip Timed", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments", "Bag Storage"],
    awards: ["Finisher Medal", "Event T-Shirt", "Trophy for Top 3", "Digital Certificate", "Race Photos"],
    tickets: [
      { id: "half", name: "Half Marathon", type: "Individual", price: 1800, desc: "Includes T-shirt, timing chip, finisher medal & certificate." },
      { id: "10k", name: "10K Run", type: "Individual", price: 1200, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Fun Run", type: "Individual", price: 700, desc: "Includes T-shirt & finisher certificate." }
    ],
    organizer: { name: "Coastal Runners Trust", email: "office@coastalrunners.in", phone: "+91 98200 11223" }
  },
  {
    id: "delhi-winter-run",
    name: "Delhi Winter Run 10K",
    city: "New Delhi",
    venue: "India Gate Lawns",
    address: "Rajpath, New Delhi, Delhi 110001",
    date: "2026-12-14",
    dateLabel: "Dec 14, 2026",
    startTime: "6:00 AM",
    regEndsLabel: "Registration ends in 62 days",
    gradient: "from-sky-600 via-blue-600 to-indigo-700",
    trending: true,
    featured: true,
    status: "open",
    priceMin: 500,
    priceMax: 1400,
    viewedRecently: 98,
    likes: 47,
    summary: "Beat the winter chill with a brisk run around one of Delhi's most historic landmarks.",
    description: [
      "The Delhi Winter Run 10K is a crisp, energetic morning race circling India Gate, ideal for both seasoned racers and first-time 10K finishers.",
      "All finishers receive a medal, certificate, and a warm breakfast at the finish line."
    ],
    facilities: ["Run Surface: Road", "Profile: Flat", "Route Measurement: Chip Timed", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates", "Race Photos"],
    tickets: [
      { id: "10k", name: "10K Run", type: "Individual", price: 1400, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Run", type: "Individual", price: 900, desc: "Includes T-shirt & certificate." },
      { id: "3k", name: "3K Fun Run", type: "Individual", price: 500, desc: "Family friendly, includes certificate." }
    ],
    organizer: { name: "Capital Sports Federation", email: "info@capitalsports.in", phone: "+91 98111 44556" }
  },
  {
    id: "bengaluru-tech-city",
    name: "Bengaluru Tech City Marathon",
    city: "Bengaluru",
    venue: "Cubbon Park",
    address: "Kasturba Road, Bengaluru, Karnataka 560001",
    date: "2026-11-29",
    dateLabel: "Nov 29, 2026",
    startTime: "5:00 AM",
    regEndsLabel: "Registration ends in 47 days",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    trending: true,
    featured: true,
    status: "open",
    priceMin: 900,
    priceMax: 2200,
    viewedRecently: 176,
    likes: 88,
    summary: "India's Silicon Valley hosts its biggest running celebration through leafy boulevards and tech parks.",
    description: [
      "The Bengaluru Tech City Marathon takes runners through Cubbon Park, MG Road, and the Outer Ring Road tech corridor.",
      "AFI certified course with full medical support, hydration stations every 2.5km, and live cheer zones."
    ],
    facilities: ["Run Surface: Road", "Profile: Rolling", "Route Measurement: AFI Certified", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments", "Supervised Bag Storage"],
    awards: ["Finisher Medal", "Event T-Shirt", "Trophy for Winners", "Finish Line Goodies", "Certificates"],
    tickets: [
      { id: "full", name: "Full Marathon", type: "Individual", price: 2200, desc: "Includes T-shirt, timing chip, certificate & finisher medal." },
      { id: "half", name: "Half Marathon", type: "Individual", price: 1600, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "10k", name: "10K Run", type: "Individual", price: 1100, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Run", type: "Individual", price: 900, desc: "Includes T-shirt & certificate." }
    ],
    organizer: { name: "Garden City Runners Club", email: "run@gardencityrunners.in", phone: "+91 98450 77889" }
  },
  {
    id: "hyderabad-heritage-run",
    name: "Hyderabad Heritage Run",
    city: "Hyderabad",
    venue: "Tank Bund Road",
    address: "Tank Bund, Hyderabad, Telangana 500080",
    date: "2026-12-20",
    dateLabel: "Dec 20, 2026",
    startTime: "5:30 AM",
    regEndsLabel: "Registration ends in 68 days",
    gradient: "from-amber-600 via-orange-600 to-red-700",
    trending: false,
    featured: false,
    status: "open",
    priceMin: 600,
    priceMax: 1600,
    viewedRecently: 54,
    likes: 21,
    summary: "Race past Hussain Sagar Lake and the city's iconic monuments on this heritage route.",
    description: [
      "The Hyderabad Heritage Run winds along Tank Bund with views of the Buddha Statue and Hussain Sagar Lake.",
      "A family-friendly event with categories for every fitness level."
    ],
    facilities: ["Run Surface: Road", "Profile: Flat", "Route Measurement: Chip Timed", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates", "Race Photos"],
    tickets: [
      { id: "half", name: "Half Marathon", type: "Individual", price: 1600, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "10k", name: "10K Run", type: "Individual", price: 1000, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Fun Run", type: "Individual", price: 600, desc: "Includes T-shirt & certificate." }
    ],
    organizer: { name: "Nizam Runners Association", email: "contact@nizamrunners.in", phone: "+91 90000 12233" }
  },
  {
    id: "chennai-marina-run",
    name: "Chennai Marina Beach Run",
    city: "Chennai",
    venue: "Marina Beach",
    address: "Kamarajar Salai, Chennai, Tamil Nadu 600005",
    date: "2027-01-04",
    dateLabel: "Jan 04, 2027",
    startTime: "5:00 AM",
    regEndsLabel: "Registration ends in 83 days",
    gradient: "from-cyan-600 via-sky-600 to-blue-700",
    trending: false,
    featured: false,
    status: "open",
    priceMin: 550,
    priceMax: 1500,
    viewedRecently: 39,
    likes: 18,
    summary: "Feel the sea breeze on India's longest urban beach as you race toward the lighthouse.",
    description: [
      "The Chennai Marina Beach Run offers a flat, scenic course along the Bay of Bengal coastline.",
      "Hydration and medical support every 2km along the route."
    ],
    facilities: ["Run Surface: Road", "Profile: Flat", "Route Measurement: Chip Timed", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates"],
    tickets: [
      { id: "10k", name: "10K Run", type: "Individual", price: 1500, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Run", type: "Individual", price: 900, desc: "Includes T-shirt & certificate." },
      { id: "3k", name: "3K Fun Run", type: "Individual", price: 550, desc: "Family friendly, includes certificate." }
    ],
    organizer: { name: "Marina Runners Collective", email: "hello@marinarunners.in", phone: "+91 94440 99887" }
  },
  {
    id: "jaipur-pink-city-ultra",
    name: "Jaipur Pink City Ultra",
    city: "Jaipur",
    venue: "Amer Fort Road",
    address: "Amer, Jaipur, Rajasthan 302028",
    date: "2027-02-08",
    dateLabel: "Feb 08, 2027",
    startTime: "4:30 AM",
    regEndsLabel: "Registration ends in 118 days",
    gradient: "from-pink-600 via-rose-600 to-red-700",
    trending: false,
    featured: false,
    status: "open",
    priceMin: 1200,
    priceMax: 3200,
    viewedRecently: 27,
    likes: 12,
    summary: "A challenging ultra route beneath the ramparts of Amer Fort — for runners who chase distance.",
    description: [
      "The Jaipur Pink City Ultra is a rolling-terrain ultra marathon with 25K, 50K and 12K categories through the historic Aravalli foothills.",
      "Full crew support, mandatory gear checks, and cut-off checkpoints along the route."
    ],
    facilities: ["Run Surface: Mixed Road/Trail", "Profile: Rolling", "Route Measurement: GPS Verified", "Water Stations: Yes", "Distance Markers: Every 2km", "Traffic Free: Partial"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments", "Supervised Bag Storage"],
    awards: ["Finisher Medal", "Event T-Shirt", "Trophy for Winners", "Certificates", "Race Photos"],
    tickets: [
      { id: "50k", name: "50K Ultra", type: "Individual", price: 3200, desc: "Includes crew support, T-shirt, timing chip & medal." },
      { id: "25k", name: "25K Trail Run", type: "Individual", price: 2000, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "12k", name: "12K Run", type: "Individual", price: 1200, desc: "Includes T-shirt & certificate." }
    ],
    organizer: { name: "Aravalli Trail Runners", email: "race@aravallitrail.in", phone: "+91 98290 55667" }
  },
  {
    id: "goa-sunrise-beach-run",
    name: "Goa Sunrise Beach Run",
    city: "Goa",
    venue: "Candolim Beach",
    address: "Candolim, North Goa, Goa 403515",
    date: "2026-11-15",
    dateLabel: "Nov 15, 2026",
    startTime: "5:30 AM",
    regEndsLabel: "Registration ends in 33 days",
    gradient: "from-yellow-500 via-amber-500 to-orange-600",
    trending: true,
    featured: false,
    status: "open",
    priceMin: 650,
    priceMax: 1300,
    viewedRecently: 61,
    likes: 34,
    summary: "Sand between your toes, sun on the horizon — Goa's favourite beach run is back.",
    description: [
      "The Goa Sunrise Beach Run takes runners along the shoreline of Candolim Beach with a post-race breakfast and beach party.",
      "Open to all fitness levels with a relaxed, festival vibe."
    ],
    facilities: ["Run Surface: Sand/Promenade", "Profile: Flat", "Route Measurement: GPS Verified", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates", "Race Photos"],
    tickets: [
      { id: "10k", name: "10K Beach Run", type: "Individual", price: 1300, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Fun Run", type: "Individual", price: 650, desc: "Includes T-shirt & certificate." }
    ],
    organizer: { name: "Goa Beach Runners", email: "run@goabeachrunners.in", phone: "+91 98221 33445" }
  },
  {
    id: "kolkata-victoria-run",
    name: "Kolkata Victoria Run Fest",
    city: "Kolkata",
    venue: "Victoria Memorial Grounds",
    address: "1, Queens Way, Kolkata, West Bengal 700071",
    date: "2026-12-27",
    dateLabel: "Dec 27, 2026",
    startTime: "6:00 AM",
    regEndsLabel: "Registration ends in 75 days",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
    trending: false,
    featured: false,
    status: "open",
    priceMin: 500,
    priceMax: 1200,
    viewedRecently: 22,
    likes: 9,
    summary: "Run in the shadow of one of India's grandest monuments in the heart of the City of Joy.",
    description: [
      "The Kolkata Victoria Run Fest loops around the Victoria Memorial and Maidan, ending with cultural performances and food stalls.",
      "A celebration of running and community, open to families and first-timers."
    ],
    facilities: ["Run Surface: Road", "Profile: Flat", "Route Measurement: Chip Timed", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets", "Refreshments"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates"],
    tickets: [
      { id: "10k", name: "10K Run", type: "Individual", price: 1200, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Fun Run", type: "Individual", price: 750, desc: "Includes T-shirt & certificate." },
      { id: "2k", name: "2K Family Walk", type: "Individual", price: 500, desc: "Includes certificate, open to all ages." }
    ],
    organizer: { name: "City of Joy Runners", email: "info@cojrunners.in", phone: "+91 98300 66778" }
  },
  {
    id: "shimla-hill-run",
    name: "Shimla Hill Run 2026",
    city: "Shimla",
    venue: "The Ridge",
    address: "The Ridge, Shimla, Himachal Pradesh 171001",
    date: "2026-08-02",
    dateLabel: "Aug 02, 2026",
    startTime: "6:00 AM",
    regEndsLabel: "Registration closed",
    gradient: "from-slate-500 via-gray-600 to-zinc-700",
    trending: false,
    featured: false,
    status: "closed",
    priceMin: 500,
    priceMax: 1100,
    viewedRecently: 8,
    likes: 15,
    summary: "A hill-station classic through Shimla's pine forests and colonial-era streets.",
    description: [
      "The Shimla Hill Run challenged runners with a steep, scenic climb around The Ridge and Mall Road.",
      "This edition has concluded — stay tuned for the 2027 edition announcement."
    ],
    facilities: ["Run Surface: Road", "Profile: Hilly", "Route Measurement: GPS Verified", "Water Stations: Yes", "Distance Markers: Every 1km", "Traffic Free: Yes"],
    venueFacilities: ["Changing Rooms", "First Aid", "Toilets"],
    awards: ["Finisher Medal", "Event T-Shirt", "Certificates"],
    tickets: [
      { id: "10k", name: "10K Hill Run", type: "Individual", price: 1100, desc: "Includes T-shirt, timing chip & certificate." },
      { id: "5k", name: "5K Run", type: "Individual", price: 500, desc: "Includes T-shirt & certificate." }
    ],
    organizer: { name: "Himalayan Runners Guild", email: "info@himalayanrunners.in", phone: "+91 98160 22334" }
  }
];

const RP = {
  events: RP_EVENTS,
  getById(id) {
    return RP_EVENTS.find(e => e.id === id);
  },
  getTicket(eventId, ticketId) {
    const ev = this.getById(eventId);
    if (!ev) return null;
    return ev.tickets.find(t => t.id === ticketId);
  },
  formatINR(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
  },
  trending() {
    return RP_EVENTS.filter(e => e.trending);
  },
  featured() {
    return RP_EVENTS.filter(e => e.featured);
  },
  saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem("rp_orders") || "[]");
    orders.push(order);
    localStorage.setItem("rp_orders", JSON.stringify(orders));
  },
  getOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem("rp_orders") || "[]");
    return orders.find(o => o.orderId === orderId);
  },
  setCart(cart) {
    sessionStorage.setItem("rp_cart", JSON.stringify(cart));
  },
  getCart() {
    return JSON.parse(sessionStorage.getItem("rp_cart") || "null");
  }
};
