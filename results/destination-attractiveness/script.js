const topics = [
  {
    id: 1,
    label: "Dining and retail offer",
    terms: ["Shops", "streets", "restaurants", "gothic", "quarter", "bars", "ramblas", "narrow", "market", "food", "cafes", "shopping", "tapas", "side", "walk", "places", "eat", "buildings", "stalls", "rambla", "walking", "full", "squares", "stores"],
    sentence: "We walked the full length of this amazing road, saw many wonderful attractions including the St Josephs Markets, beautiful open air plazas, fantastic shopping and superb food on every corner.",
    map: { x: 32.5, y: 11, size: 22 }
  },
  {
    id: 2,
    label: "Gaudí’s architectural works",
    terms: ["Gaudí", "sagrada", "familia", "casa", "architecture", "building", "work", "years", "Batlló", "amazing", "construction", "genius", "art", "church", "architectural", "architect", "basilica", "masterpiece", "Antoni", "design", "Güell", "beautiful", "park", "cathedral", "built", "unique"],
    sentence: "Unbelievable how the ideas of a (brilliant) man, Gaudí, from a hundred years ago, are still becoming reality and realization, still becoming amazing forms of art, beauty, creation and genius solutions!",
    map: { x: 82, y: 57, size: 20 }
  },
  {
    id: 3,
    label: "Urban mobility",
    terms: ["Park", "walk", "views", "free", "bus", "metro", "hill", "top", "entrance", "steep", "Güell", "hop", "station", "pay", "climb", "stairs", "uphill", "steps", "escalators", "monumental", "fee", "stop", "taxi"],
    sentence: "Park Güell is located on a hill, so planning the visit on foot or by bike requires a little effort.",
    map: { x: 38.5, y: 53, size: 20 }
  },
  {
    id: 4,
    label: "Ticketing services",
    terms: ["Tickets", "online", "advance", "time", "book", "line", "buy", "long", "queue", "wait", "avoid", "early", "entry", "queues", "bought", "booking", "slot", "purchase", "skip", "lines", "enter", "waiting", "hours", "arrived"],
    sentence: "We booked a timed entrance online... the line moved quickly, and we were able to experience this amazing basilica on our own timing.",
    map: { x: 13.5, y: 86, size: 19 }
  },
  {
    id: 5,
    label: "Urban atmosphere",
    terms: ["People", "tourists", "street", "pick", "pickpockets", "night", "police", "crowded", "selling", "watch", "ramblas", "busy", "careful", "crowds", "vendors", "music", "safe", "sellers", "belongings", "wallet", "musicians", "bag"],
    sentence: "You are watching out all the time for pickpockets.",
    map: { x: 21.5, y: 32.5, size: 19 }
  },
  {
    id: 6,
    label: "Gaudí’s architectural style",
    terms: ["Glass", "windows", "light", "stained", "beautiful", "architecture", "Gaudí", "colors", "columns", "building", "interior", "roof", "nature", "mosaic", "design", "stunning", "sun", "shapes", "tiles", "walls", "details", "dragon", "detail", "unique"],
    sentence: "The stained-glass windows provide a changing colour scheme as the sun moves about the sky.",
    map: { x: 87, y: 43, size: 18 }
  },
  {
    id: 7,
    label: "Guided tours",
    terms: ["Guide", "tour", "audio", "guided", "house", "information", "reality", "room", "video", "history", "building", "visual", "experience", "guides", "Gaudí", "interactive", "augmented", "virtual", "device", "price", "headphones", "looked", "audioguide", "furniture"],
    sentence: "The audio/visual tour, included in the ticket price, featured excellent descriptions and a smartphone-like screen with visual effects that would change as one panned it like a camera around each room.",
    map: { x: 60, y: 74, size: 17 }
  }
];

const elements = {
  list: document.querySelector("#topic-list"),
  detail: document.querySelector("#topic-detail"),
  currentTopic: document.querySelector("#current-topic"),
  label: document.querySelector("#detail-label"),
  mark: document.querySelector("#topic-mark"),
  terms: document.querySelector("#terms"),
  sentence: document.querySelector("#sentence"),
  map: document.querySelector("#topic-map"),
};

let activeIndex = 0;

function twoDigits(number) {
  return String(number).padStart(2, "0");
}

function createNavigation() {
  topics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.className = "topic-button";
    button.type = "button";
    button.dataset.index = index;
    button.textContent = topic.id;
    button.setAttribute("aria-label", `Topic ${topic.id}: ${topic.label}`);
    button.addEventListener("click", () => selectTopic(index));
    elements.list.appendChild(button);
  });
}

function createMap() {
  topics.forEach((topic, index) => {
    const bubble = document.createElement("button");
    bubble.className = "map-bubble";
    bubble.type = "button";
    bubble.dataset.index = index;
    bubble.textContent = topic.id;
    bubble.setAttribute("aria-label", `Topic ${topic.id}: ${topic.label}`);
    bubble.style.left = `${topic.map.x}%`;
    bubble.style.top = `${topic.map.y}%`;
    bubble.style.setProperty("--size", `${topic.map.size}%`);
    bubble.addEventListener("click", () => selectTopic(index));
    elements.map.appendChild(bubble);
  });
}

function selectTopic(index) {
  activeIndex = (index + topics.length) % topics.length;
  const topic = topics[activeIndex];

  elements.currentTopic.textContent = topic.id;
  elements.label.textContent = topic.label;
  elements.mark.textContent = topic.id;
  elements.sentence.textContent = topic.sentence;

  elements.terms.innerHTML = "";
  topic.terms.forEach((term, termIndex) => {
    const tag = document.createElement("span");
    tag.className = "term";
    tag.textContent = term;
    tag.style.animationDelay = `${Math.min(termIndex * 18, 220)}ms`;
    elements.terms.appendChild(tag);
  });

  document.querySelectorAll(".topic-button").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === activeIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });

  document.querySelectorAll(".map-bubble").forEach((bubble, bubbleIndex) => {
    const isActive = bubbleIndex === activeIndex;
    bubble.classList.toggle("active", isActive);
    bubble.setAttribute("aria-pressed", String(isActive));
  });

  elements.detail.animate(
    [
      { opacity: 0.55, transform: "translateY(4px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 260, easing: "ease-out" }
  );
}

document.addEventListener("keydown", (event) => {
  const forward = ["ArrowDown", "ArrowRight", "PageDown"];
  const backward = ["ArrowUp", "ArrowLeft", "PageUp"];

  if (forward.includes(event.key)) {
    event.preventDefault();
    selectTopic(activeIndex + 1);
  }

  if (backward.includes(event.key)) {
    event.preventDefault();
    selectTopic(activeIndex - 1);
  }

  if (/^[1-7]$/.test(event.key)) {
    selectTopic(Number(event.key) - 1);
  }
});

createNavigation();
createMap();
selectTopic(0);
