/* CafeHoppers prototype data.
   Cafe names, photos and amenity values below are illustrative sample content,
   not verified recommendations or live business listings. */
const cafes = [
  {
    id: "01", name: "The Slow Room", area: "Bandra West", price: 550,
    category: "Coffee & quiet corners",
    description: "A softly lit sample listing imagined for slow mornings, journaling and a second cup.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
    alt: "Warm cafe interior with wooden furniture",
    vibes: ["quiet", "solo", "study", "artsy"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Bandra West, Mumbai",
    priceLabel: "₹₹", note: "A calm-corner concept"
  },
  {
    id: "02", name: "Goodkind Coffee", area: "Khar", price: 450,
    category: "Coffee & laptop days",
    description: "A sample neighbourhood coffee spot for planning sessions and catching up on your own time.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    alt: "Cafe tables and warm pendant lighting",
    vibes: ["work", "solo", "study"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Khar, Mumbai",
    priceLabel: "₹₹", note: "A workday concept"
  },
  {
    id: "03", name: "Sunday Elsewhere", area: "Juhu", price: 700,
    category: "Brunch & outdoors",
    description: "A sample listing for long brunches, leafy corners and plans with nowhere to rush.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Bright cafe with natural light and cafe seating",
    vibes: ["outdoor", "date", "solo", "pet"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Juhu, Mumbai",
    priceLabel: "₹₹₹", note: "A slow-Sunday concept"
  },
  {
    id: "04", name: "Little Fern Cafe", area: "Andheri", price: 400,
    category: "Garden & pet-friendly vibe",
    description: "A fictional sample concept with a garden-inspired mood and room for a change of scene.",
    image: "https://images.unsplash.com/photo-1493853762457-8f5b5f6f1a5a?auto=format&fit=crop&w=900&q=80",
    alt: "Cafe interior with plants and wooden tables",
    vibes: ["pet", "outdoor", "artsy", "solo"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Andheri, Mumbai",
    priceLabel: "₹₹", note: "A garden-inspired concept"
  },
  {
    id: "05", name: "Paper & Pour", area: "Fort", price: 500,
    category: "Books, coffee & focus",
    description: "A sample idea for book lovers, thoughtful conversations and getting a few pages done.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    alt: "Notebook and coffee on a table",
    vibes: ["quiet", "study", "work", "solo", "artsy"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Fort, Mumbai",
    priceLabel: "₹₹", note: "A reading-room concept"
  },
  {
    id: "06", name: "Velvet Hour", area: "Colaba", price: 850,
    category: "Date-night atmosphere",
    description: "A fictional, intimate-feeling cafe concept for an unhurried catch-up or a little occasion.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Intimate restaurant cafe with warm lighting",
    vibes: ["date", "artsy", "outdoor"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Colaba, Mumbai",
    priceLabel: "₹₹₹", note: "An evening-out concept"
  },
  {
    id: "07", name: "Moss & Milk", area: "Bandra", price: 480,
    category: "Plants & slow coffee",
    description: "A sample listing built around earthy textures, a relaxed pace and solo coffee breaks.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    alt: "Coffee cup and beans on a cafe table",
    vibes: ["pet", "quiet", "solo", "artsy"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Bandra, Mumbai",
    priceLabel: "₹₹", note: "An earthy cafe concept"
  },
  {
    id: "08", name: "Daylight Social", area: "Bandra West", price: 650,
    category: "Brunch & conversations",
    description: "A sample place for a bright table, a catch-up that runs long and a weekend reset.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    alt: "Bright independent cafe with tables and chairs",
    vibes: ["date", "outdoor", "work", "artsy"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Bandra West, Mumbai",
    priceLabel: "₹₹₹", note: "A brunch concept"
  },
  {
    id: "09", name: "The Corner Chapter", area: "Andheri", price: 350,
    category: "Study & solo time",
    description: "A sample budget-conscious concept for a notebook, a task list and a little time to yourself.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    alt: "Coffee being prepared in a cozy cafe",
    vibes: ["study", "work", "quiet", "solo"],
    wifi: "Unverified", outlets: "Unverified", noise: "Unverified", pets: "Unverified",
    hours: "Unverified", address: "Sample listing · Andheri, Mumbai",
    priceLabel: "₹", note: "A focused-day concept"
  }
];

const vibeLabels = {
  pet: "Pet-friendly", work: "Work-friendly", quiet: "Quiet & reading",
  date: "Date night", outdoor: "Outdoor seating", solo: "Solo-friendly",
  study: "Study-friendly", artsy: "Artsy & aesthetic"
};
const authView = document.getElementById("auth-view");
const appView = document.getElementById("app-view");
const authForm = document.getElementById("auth-form");
const authTitle = document.getElementById("auth-title");
const authSubtitle = document.getElementById("auth-subtitle");
const authEyebrow = document.getElementById("auth-eyebrow");
const authSubmit = document.getElementById("auth-submit");
const authError = document.getElementById("auth-error");
const nameField = document.getElementById("name-field");
const switchAuth = document.getElementById("switch-auth");
const switchCopy = document.getElementById("switch-copy");
const passwordInput = document.getElementById("auth-password");
const searchInput = document.getElementById("search-input");
const areaFilter = document.getElementById("area-filter");
const sortFilter = document.getElementById("sort-filter");
const cafeGrid = document.getElementById("cafe-grid");
const savedGrid = document.getElementById("saved-grid");
const activeChips = document.getElementById("active-chips");
const vibeMenu = document.getElementById("vibe-menu");
const vibeToggle = document.getElementById("vibe-toggle");
const vibeLabel = document.getElementById("vibe-label");
const toast = document.getElementById("toast");

let authMode = "signin";
let selectedVibes = new Set();
let appliedVibes = new Set();
let savedIds = new Set(JSON.parse(localStorage.getItem("cafehoppers-saved") || "[]"));
let currentUser = JSON.parse(localStorage.getItem("cafehoppers-profile") || "null");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function setAuthMode(mode) {
  authMode = mode;
  const signup = mode === "signup";
  authTitle.textContent = signup ? "Make yourself at home." : "Welcome back.";
  authSubtitle.textContent = signup ? "Create a little space for your cafe discoveries." : "Sign in to find a space that feels like yours.";
  authEyebrow.textContent = signup ? "YOUR LITTLE BLACK BOOK STARTS HERE" : "YOUR NEXT LITTLE DISCOVERY";
  authSubmit.innerHTML = signup ? 'Create account <span aria-hidden="true">↗</span>' : 'Sign in <span aria-hidden="true">↗</span>';
  nameField.classList.toggle("hidden", !signup);
  document.getElementById("auth-name").required = signup;
  passwordInput.autocomplete = signup ? "new-password" : "current-password";
  switchCopy.textContent = signup ? "Already have an account?" : "New around here?";
  switchAuth.textContent = signup ? "Sign in" : "Create an account";
  authError.textContent = "";
}
function enterApp(profile) {
  currentUser = profile;
  localStorage.setItem("cafehoppers-profile", JSON.stringify(profile));
  authView.classList.add("hidden");
  appView.classList.remove("hidden");
  document.getElementById("profile-initial").textContent = (profile.name || profile.email || "G").trim().charAt(0).toUpperCase();
  renderCafes();
  renderSaved();
  window.scrollTo(0, 0);
}
function signOut() {
  localStorage.removeItem("cafehoppers-profile");
  currentUser = null;
  appView.classList.add("hidden");
  authView.classList.remove("hidden");
  authForm.reset();
  setAuthMode("signin");
  window.scrollTo(0, 0);
}
authForm.addEventListener("submit", event => {
  event.preventDefault();
  authError.textContent = "";
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const password = passwordInput.value;
  const name = document.getElementById("auth-name").value.trim();
  if (password.length < 4) {
    authError.textContent = "Please use at least 4 characters for this demo.";
    return;
  }
  // Demo-only: no password is saved and no real authentication takes place.
  if (authMode === "signup" && !name) {
    authError.textContent = "Please enter your name.";
    return;
  }
  enterApp({ name: authMode === "signup" ? name : email.split("@")[0], email, guest: false });
  showToast(authMode === "signup" ? "Welcome to your little corner." : "Welcome back. Let's find your spot.");
});
switchAuth.addEventListener("click", () => setAuthMode(authMode === "signin" ? "signup" : "signin"));
document.getElementById("guest-button").addEventListener("click", () => {
  enterApp({ name: "Guest", email: "", guest: true });
  showToast("Welcome in. Have a look around.");
});
document.getElementById("profile-button").addEventListener("click", () => {
  if (confirm("Sign out of this CafeHoppers demo?")) signOut();
});
document.getElementById("home-link").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function getSelectedVibesFromMenu() {
  return [...vibeMenu.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value);
}
function syncDropdown() {
  const count = selectedVibes.size;
  document.getElementById("selected-count").textContent = `${count} selected`;
  vibeLabel.textContent = count ? [...selectedVibes].map(v => vibeLabels[v]).join(", ") : "What kind of space are you looking for?";
  vibeToggle.setAttribute("aria-expanded", String(!vibeMenu.classList.contains("hidden")));
}
vibeToggle.addEventListener("click", () => {
  vibeMenu.classList.toggle("hidden");
  syncDropdown();
});
vibeMenu.addEventListener("change", event => {
  if (event.target.matches('input[type="checkbox"]')) {
    selectedVibes = new Set(getSelectedVibesFromMenu());
    syncDropdown();
  }
});
document.getElementById("apply-filters").addEventListener("click", () => {
  appliedVibes = new Set(selectedVibes);
  vibeMenu.classList.add("hidden");
  syncDropdown();
  renderCafes();
  renderChips();
});
document.addEventListener("click", event => {
  if (!document.getElementById("vibe-select").contains(event.target)) {
    vibeMenu.classList.add("hidden");
    syncDropdown();
  }
});
document.getElementById("clear-filters").addEventListener("click", clearFilters);
document.getElementById("reset-empty").addEventListener("click", clearFilters);
function clearFilters() {
  selectedVibes.clear();
  appliedVibes.clear();
  vibeMenu.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
  searchInput.value = "";
  areaFilter.value = "All";
  sortFilter.value = "curated";
  document.getElementById("clear-search").classList.add("hidden");
  syncDropdown();
  renderCafes();
  renderChips();
}
searchInput.addEventListener("input", () => {
  document.getElementById("clear-search").classList.toggle("hidden", !searchInput.value);
  renderCafes();
});
document.getElementById("clear-search").addEventListener("click", () => {
  searchInput.value = "";
  document.getElementById("clear-search").classList.add("hidden");
  renderCafes();
  searchInput.focus();
});
areaFilter.addEventListener("change", renderCafes);
sortFilter.addEventListener("change", renderCafes);

function getFilteredCafes() {
  const query = searchInput.value.trim().toLowerCase();
  const area = areaFilter.value;
  let result = cafes.filter(cafe => {
    const searchable = `${cafe.name} ${cafe.area} ${cafe.category} ${cafe.description} ${cafe.vibes.map(v => vibeLabels[v]).join(" ")}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    const matchesArea = area === "All" || cafe.area === area;
    // All selected vibes must match, making multi-select filters predictable.
    const matchesVibes = [...appliedVibes].every(vibe => cafe.vibes.includes(vibe));
    return matchesQuery && matchesArea && matchesVibes;
  });
  if (sortFilter.value === "name") result.sort((a,b) => a.name.localeCompare(b.name));
  if (sortFilter.value === "price-low") result.sort((a,b) => a.price - b.price);
  if (sortFilter.value === "price-high") result.sort((a,b) => b.price - a.price);
  return result;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function cafeCard(cafe, savedContext = false) {
  const isSaved = savedIds.has(cafe.id);
  const tags = cafe.vibes.slice(0, 3).map(vibe => `<span class="mini-tag">${escapeHTML(vibeLabels[vibe])}</span>`).join("");
  return `
    <article class="cafe-card">
      <div class="card-image-wrap">
        <img class="card-image" src="${escapeHTML(cafe.image)}" alt="${escapeHTML(cafe.alt)}" loading="lazy">
        <span class="card-tag">${escapeHTML(cafe.category)}</span>
        <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${cafe.id}" aria-label="${isSaved ? "Remove" : "Save"} ${escapeHTML(cafe.name)} ${isSaved ? "from" : "to"} saved cafes" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <div class="card-title-row"><h3>${escapeHTML(cafe.name)}</h3><span class="card-price">${escapeHTML(cafe.priceLabel)}</span></div>
        <p class="card-location">⌖ ${escapeHTML(cafe.area)}, Mumbai · Sample listing</p>
        <p class="card-description">${escapeHTML(cafe.description)}</p>
        <div class="card-tags">${tags}</div>
        <div class="card-bottom"><span>Approx. ₹${cafe.price} for two*</span><button class="details-button" type="button" data-details="${cafe.id}">Know the details ↗</button></div>
      </div>
    </article>`;
}
function renderCafes() {
  const result = getFilteredCafes();
  cafeGrid.innerHTML = result.map(cafe => cafeCard(cafe)).join("");
  document.getElementById("empty-state").classList.toggle("hidden", result.length !== 0);
  document.getElementById("results-summary").textContent = `${result.length} ${result.length === 1 ? "place" : "places"} to match your mood`;
  document.getElementById("cafe-count").textContent = `${result.length} ${result.length === 1 ? "cafe" : "cafes"}`;
  renderChips();
}
function renderChips() {
  const chips = [];
  appliedVibes.forEach(v => chips.push({ key: v, label: vibeLabels[v], type: "vibe" }));
  if (areaFilter.value !== "All") chips.push({ key: areaFilter.value, label: areaFilter.value, type: "area" });
  if (searchInput.value.trim()) chips.push({ key: "search", label: `Search: ${searchInput.value.trim()}`, type: "search" });
  activeChips.innerHTML = chips.map(chip => `<span class="active-chip">${escapeHTML(chip.label)} <button type="button" data-remove-chip="${escapeHTML(chip.key)}" data-chip-type="${chip.type}" aria-label="Remove ${escapeHTML(chip.label)} filter">×</button></span>`).join("");
}
function renderSaved() {
  const savedCafes = cafes.filter(cafe => savedIds.has(cafe.id));
  document.getElementById("saved-nav-count").textContent = savedCafes.length;
  savedGrid.innerHTML = savedCafes.map(cafe => cafeCard(cafe, true)).join("");
  document.getElementById("saved-empty").classList.toggle("hidden", savedCafes.length > 0);
}
document.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (savedIds.has(id)) {
      savedIds.delete(id);
      showToast("Removed from your little black book.");
    } else {
      savedIds.add(id);
      showToast("Saved for a future you.");
    }
    localStorage.setItem("cafehoppers-saved", JSON.stringify([...savedIds]));
    renderCafes();
    renderSaved();
    return;
  }
  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton) openDetails(detailsButton.dataset.details);
  const chipButton = event.target.closest("[data-remove-chip]");
  if (chipButton) {
    const { removeChip, chipType } = { removeChip: chipButton.dataset.removeChip, chipType: chipButton.dataset.chipType };
    if (chipType === "vibe") {
      appliedVibes.delete(removeChip);
      selectedVibes.delete(removeChip);
      const input = vibeMenu.querySelector(`input[value="${removeChip}"]`);
      if (input) input.checked = false;
      syncDropdown();
    } else if (chipType === "area") areaFilter.value = "All";
    else if (chipType === "search") searchInput.value = "";
    document.getElementById("clear-search").classList.toggle("hidden", !searchInput.value);
    renderCafes();
  }
});

function openDetails(id) {
  const cafe = cafes.find(item => item.id === id);
  if (!cafe) return;
  document.getElementById("detail-content").innerHTML = `
    <img class="detail-hero" src="${escapeHTML(cafe.image)}" alt="${escapeHTML(cafe.alt)}">
    <div class="detail-body">
      <p class="eyebrow">THE CAFE NOTEBOOK · SAMPLE LISTING</p>
      <h2 id="detail-title">${escapeHTML(cafe.name)}</h2>
      <p class="detail-meta">⌖ ${escapeHTML(cafe.area)}, Mumbai · ${escapeHTML(cafe.category)}</p>
      <p class="detail-description">${escapeHTML(cafe.description)}</p>
      <h3>Know before you go</h3>
      <div class="amenity-grid">
        <div class="amenity"><span>Wi-Fi</span><strong>${escapeHTML(cafe.wifi)}</strong></div>
        <div class="amenity"><span>Power outlets</span><strong>${escapeHTML(cafe.outlets)}</strong></div>
        <div class="amenity"><span>Noise level</span><strong>${escapeHTML(cafe.noise)}</strong></div>
        <div class="amenity"><span>Pet policy</span><strong>${escapeHTML(cafe.pets)}</strong></div>
        <div class="amenity"><span>Opening hours</span><strong>${escapeHTML(cafe.hours)}</strong></div>
        <div class="amenity"><span>Approx. spend for two</span><strong>₹${cafe.price}</strong></div>
      </div>
      <p class="verification-note">This is illustrative sample data, not a verified real business listing. Amenities, prices, opening hours and pet policies are unverified. Please confirm details directly with a venue before visiting.</p>
      <button class="button button-dark button-wide" type="button" data-save="${cafe.id}">${savedIds.has(cafe.id) ? "♥ Saved in my little black book" : "♡ Save to my little black book"}</button>
    </div>`;
  document.getElementById("detail-modal").classList.remove("hidden");
  document.getElementById("close-modal").focus();
  document.body.style.overflow = "hidden";
}
function closeDetails() {
  document.getElementById("detail-modal").classList.add("hidden");
  document.body.style.overflow = "";
}
document.getElementById("close-modal").addEventListener("click", closeDetails);
document.getElementById("detail-modal").addEventListener("click", event => {
  if (event.target.id === "detail-modal") closeDetails();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDetails();
    vibeMenu.classList.add("hidden");
    syncDropdown();
  }
});

// Re-open the prototype in the app if a demo profile exists in this browser.
if (currentUser) enterApp(currentUser);
else setAuthMode("signin");
syncDropdown();
renderCafes();
renderSaved();
