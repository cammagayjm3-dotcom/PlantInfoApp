// ====== PLANT DATA ======
const plantData = {
  "Rose": {
    image: "rose.jpg",
    description:
`Common Name: Rose
Scientific Name: Rosa
Family: Rosaceae
Habitat: Gardens, temperate regions

Description:
The rose is one of the most popular flowering plants in the world. It is known for its layered petals, fragrance, and wide variety of colors.

Uses:
Decoration, perfumes, cultural ceremonies.

Symbolism:
Love, beauty, respect.`
  },

  "Sunflower": {
    image: "sunflower.jpg",
    description:
`Common Name: Sunflower
Scientific Name: Helianthus annuus
Family: Asteraceae
Habitat: Open fields, farms

Description:
Sunflowers are tall plants with large yellow flower heads that follow the sun.

Uses:
Seeds for food, oil, ornamental purposes.

Symbolism:
Happiness, hope, loyalty.`
  },

  "Aloe Vera": {
    image: "aloe.jpg",
    description:
`Common Name: Aloe Vera
Scientific Name: Aloe barbadensis miller
Family: Asphodelaceae
Habitat: Dry, tropical regions

Description:
Aloe Vera is a medicinal plant known for the healing gel inside its leaves.

Uses:
Skin treatment, cosmetics, herbal medicine, health drinks.

Symbolism:
Healing, protection.`
  },

  "Orchid": {
    image: "orchid.jpg",
    description:
`Common Name: Orchid
Scientific Name: Orchidaceae
Family: Orchidaceae
Habitat: Tropical forests

Description:
Orchids are elegant flowering plants known for their complex and colorful blooms.

Uses:
Ornamental purposes.

Symbolism:
Beauty, strength, luxury.`
  },

  "Tulip": {
    image: "tulip.jpg",
    description:
`Common Name: Tulip
Scientific Name: Tulipa
Family: Liliaceae
Habitat: Temperate regions

Description:
Tulips are spring-blooming flowers with cup-shaped petals.

Uses:
Garden decoration, floral arrangements.

Symbolism:
Perfect love, new beginnings.`
  },

  "Bamboo": {
    image: "bamboo.jpg",
    description:
`Common Name: Bamboo
Scientific Name: Bambusoideae
Family: Poaceae
Habitat: Tropical & subtropical regions

Description:
Bamboo is a fast-growing grass used for construction, furniture, and paper.

Uses:
Construction, furniture, crafts.

Symbolism:
Strength, flexibility, resilience.`
  },

  "Cactus": {
    image: "cactus.jpg",
    description:
`Common Name: Cactus
Scientific Name: Cactaceae
Family: Cactaceae
Habitat: Deserts

Description:
Cacti are desert plants that store water in their thick stems.

Uses:
Ornamental, drought-tolerant gardening.

Symbolism:
Endurance, protection.`
  },

  "Fern": {
    image: "fern.jpg",
    description:
`Common Name: Fern
Scientific Name: Polypodiopsida
Family: Various
Habitat: Moist forests

Description:
Ferns are non-flowering plants that reproduce through spores.

Uses:
Decoration, terrariums.

Symbolism:
Humility, sincerity.`
  },

  "Mango Tree": {
    image: "mango.jpg",
    description:
`Common Name: Mango
Scientific Name: Mangifera indica
Family: Anacardiaceae
Habitat: Tropical regions

Description:
Produces sweet and nutritious fruits.

Uses:
Food, juice, desserts.

Symbolism:
Prosperity, abundance.`
  },

  "Banana Plant": {
    image: "banana.jpg",
    description:
`Common Name: Banana
Scientific Name: Musa
Family: Musaceae
Habitat: Tropical regions

Description:
Banana plants produce one of the most consumed fruits in the world.

Uses:
Food, fiber.

Symbolism:
Fertility, nourishment.`
  },

  "Pine Tree": {
    image: "pine.jpg",
    description:
`Common Name: Pine
Scientific Name: Pinus
Family: Pinaceae
Habitat: Cold & mountainous regions

Description:
Evergreen conifers that produce cones and needles.

Uses:
Timber, air purification.

Symbolism:
Longevity, wisdom.`
  },

  "Lotus": {
    image: "lutos.jpg",
    description:
`Common Name: Lotus
Scientific Name: Nelumbo nucifera
Family: Nelumbonaceae
Habitat: Ponds & lakes

Description:
Aquatic plant known for its beautiful flowers, grows in muddy water but blooms clean.

Uses:
Ornamental, cultural rituals.

Symbolism:
Purity, enlightenment, rebirth.`
  },

  "Lavender": {
    image: "lavender.jpg",
    description:
`Common Name: Lavender
Scientific Name: Lavandula
Family: Lamiaceae
Habitat: Mediterranean regions

Description:
Aromatic plant used in perfumes and medicine.

Uses:
Perfumes, herbal remedies, aromatherapy.

Symbolism:
Calmness, peace, healing.`
  }
};

// ====== ELEMENTS ======
const plantList = document.getElementById("plantList");
const searchField = document.getElementById("searchField");
const titleLabel = document.getElementById("titleLabel");
const darkModeButton = document.getElementById("darkModeButton");
const backButton = document.getElementById("backButton");

const imageBox = document.getElementById("imageBox");
const imageText = document.getElementById("imageText");
const plantImage = document.getElementById("plantImage");
const infoArea = document.getElementById("infoArea");

let darkMode = false;

// ====== HELPERS ======
function randomSoftColor() {
  const r = Math.floor(Math.random() * 100 + 155);
  const g = Math.floor(Math.random() * 100 + 155);
  const b = Math.floor(Math.random() * 100 + 155);
  return 'rgb(${r}, ${g}, ${b})';
}

function setActiveItem(li) {
  document.querySelectorAll(".plant-list li").forEach(x => x.classList.remove("active"));
  li.classList.add("active");
}

function updateList(filterText) {
  plantList.innerHTML = "";

  const names = Object.keys(plantData).sort();
  const filtered = names.filter(n => n.toLowerCase().includes(filterText));

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No plant available";
    li.style.cursor = "default";
    plantList.appendChild(li);
    return;
  }

  filtered.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;

    li.addEventListener("click", () => {
      setActiveItem(li);
      showPlantInfo(name);
    });

    plantList.appendChild(li);
  });
}

function showPlantInfo(name) {
  const plant = plantData[name];
  if (!plant) return;

  titleLabel.textContent = name;

  // random soft colors (like your Java)
  infoArea.parentElement.style.background = randomSoftColor();
  imageBox.style.background = randomSoftColor();

  infoArea.textContent = plant.description;

  // image
  plantImage.src = plant.image;
  plantImage.classList.remove("hidden");
  imageText.classList.add("hidden");

  plantImage.onerror = () => {
    plantImage.classList.add("hidden");
    imageText.classList.remove("hidden");
    imageText.textContent = "Image not found";
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetView() {
  titleLabel.textContent = "Plant Encyclopedia";
  infoArea.textContent = "";
  plantImage.classList.add("hidden");
  imageText.classList.remove("hidden");
  imageText.textContent = "Select a plant from the menu";
}

// ====== EVENTS ======
searchField.addEventListener("input", () => {
  const text = searchField.value.toLowerCase().trim();
  updateList(text);

  if (text.length > 0) {
    backButton.classList.remove("hidden");
  } else {
    backButton.classList.add("hidden");
  }
});

backButton.addEventListener("click", () => {
  searchField.value = "";
  updateList("");
  backButton.classList.add("hidden");
  resetView();
});

darkModeButton.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.classList.add("dark");
    darkModeButton.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark");
    darkModeButton.textContent = "Dark Mode";
  }
});

// ====== INIT ======
updateList("");
resetView();
searchField.focus();