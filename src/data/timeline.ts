export interface TimelineNode {
  id: string;
  query: string;
  displayTitle?: string;
  era: string;
  description: string; // The simple "child-friendly" text
}

export const TIMELINE_DATA: TimelineNode[] = [
  // --- COSMIC & EARTH ORIGINS ---
  {
    id: "big-bang",
    query: "Big_Bang",
    displayTitle: "The Beginning",
    era: "13.8 BYA",
    description: "The universe explodes into existence from a single point."
  },
  {
    id: "earth-formation",
    query: "Formation_of_Earth",
    displayTitle: "Earth Forms",
    era: "4.5 BYA",
    description: "Gravity pulls dust and rock together to create our home planet."
  },
  
  // --- FIRST LIFE (ARCHEAN / PROTEROZOIC) ---
  {
    id: "abiogenesis",
    query: "Abiogenesis",
    displayTitle: "Life Begins",
    era: "4.0 BYA",
    description: "In the deep oceans, simple chemistry turns into biology. The first tiny cells appear."
  },
  {
    id: "cyanobacteria",
    query: "Cyanobacteria",
    displayTitle: "The Oxygen Revolution",
    era: "3.5 BYA",
    description: "Bacteria start using sunlight to make energy, filling the air with oxygen."
  },
  {
    id: "eukaryote",
    query: "Eukaryote",
    displayTitle: "Complex Cells",
    era: "2.0 BYA",
    description: "Cells develop a nucleus and complex inner machinery. Life gets an upgrade."
  },
  {
    id: "multicellularity",
    query: "Multicellular_organism",
    displayTitle: "Working Together",
    era: "1.0 BYA",
    description: "Single cells start living together in colonies, forming the first simple bodies."
  },

  // --- ANIMAL KINGDOM RISES (PALEOZOIC) ---
  {
    id: "sponge",
    query: "Sponge",
    displayTitle: "The First Animals",
    era: "600 MYA",
    description: "Simple animals without brains or hearts, filtering water for food."
  },
  {
    id: "cnidaria",
    query: "Cnidaria",
    displayTitle: "Jellyfish & Corals",
    era: "580 MYA",
    description: "Animals develop stinging cells and simple nervous systems."
  },
  {
    id: "flatworm",
    query: "Flatworm",
    displayTitle: "Heads & Tails",
    era: "550 MYA",
    description: "Life develops bilateral symmetry: a front, a back, a left, and a right."
  },
  {
    id: "cambrian",
    query: "Cambrian_explosion",
    displayTitle: "Life Explodes!",
    era: "541 MYA",
    description: "A sudden burst of diversity! Eyes, shells, and legs appear everywhere."
  },
  {
    id: "arthropod",
    query: "Arthropod",
    displayTitle: "Armored Giants",
    era: "530 MYA",
    description: "Insects' ancestors rule the seas with hard exoskeletons."
  },
  {
    id: "vertebrate",
    query: "Vertebrate",
    displayTitle: "The Backbone",
    era: "525 MYA",
    description: "Animals develop a spine, protecting the nerve cord and allowing larger bodies."
  },
  {
    id: "fish",
    query: "Fish",
    displayTitle: "Rule of the Fish",
    era: "500 MYA",
    description: "Jawed fish dominate the oceans. Our direct ancestors are now swimming."
  },
  {
    id: "tiktaalik",
    query: "Tiktaalik",
    displayTitle: "Walking onto Land",
    era: "375 MYA",
    description: "Fish develop strong fins that become legs. Life takes its first breath of air."
  },
  {
    id: "amphibian",
    query: "Amphibian",
    displayTitle: "Conquering the Swamp",
    era: "360 MYA",
    description: "Frogs and phylospondyls live on land but still need water to lay eggs."
  },
  {
    id: "reptile",
    query: "Reptile",
    displayTitle: "Breaking Free",
    era: "310 MYA",
    description: "Hard-shelled eggs allow animals to live far away from water."
  },

  // --- MESOZOIC (Age of Dinosaurs/Mammals) ---
  {
    id: "mammalia",
    query: "Mammal",
    displayTitle: "The First Mammals",
    era: "200 MYA",
    description: "Tiny, warm-blooded, furry creatures hiding in the shadows of dinosaurs."
  },
  {
    id: "dinosaur",
    query: "Dinosaur",
    displayTitle: "Giants of Earth",
    era: "230-66 MYA",
    description: "Reptiles grow to enormous sizes and rule the planet for millions of years."
  },
  {
    id: "extinction",
    query: "Cretaceous–Paleogene_extinction_event",
    displayTitle: "The Great Meteor",
    era: "66 MYA",
    description: "A space rock hits Earth. Dinosaurs vanish, but our tiny mammal ancestors survive."
  },

  // --- CENOZOIC (Age of Mammals/Primates) ---
  {
    id: "primate",
    query: "Primate",
    displayTitle: "Living in Trees",
    era: "60 MYA",
    description: "Mammals develop grasping hands and forward-facing eyes."
  },
  {
    id: "ape",
    query: "Ape",
    displayTitle: "Losing the Tail",
    era: "25 MYA",
    description: "Larger brains and no tails. The family of apes begins."
  },
  {
    id: "hominidae",
    query: "Hominidae",
    displayTitle: "The Great Apes",
    era: "15 MYA",
    description: "Orangutans, Gorillas, Chimpanzees, and the ancestors of humans."
  },
  {
    id: "sahelanthropus",
    query: "Sahelanthropus",
    displayTitle: "The Split",
    era: "7 MYA",
    description: "One of the first apes to start walking upright on two legs."
  },
  {
    id: "australopithecus",
    query: "Australopithecus",
    displayTitle: "Lucy's Kind",
    era: "4 MYA",
    description: "Fully bipedal apes. They walked like us but still had small brains."
  },
  {
    id: "homo_habilis",
    query: "Homo_habilis",
    displayTitle: "Tool Makers",
    era: "2.4 MYA",
    description: "Use of stone tools starts. Brain size begins to increase."
  },
  {
    id: "homo_erectus",
    query: "Homo_erectus",
    displayTitle: "The Traveler",
    era: "1.9 MYA",
    description: "They discover fire, cook food, and leave Africa to explore the world."
  },
  {
    id: "neanderthal",
    query: "Neanderthal",
    displayTitle: "Our Cousins",
    era: "400 KYA",
    description: "Strong and smart humans living in Ice Age Europe. We met and mixed with them."
  },
  {
    id: "homo_sapiens",
    query: "Homo_sapiens",
    displayTitle: "We Arrive",
    era: "300 KYA",
    description: "Modern humans appear. Art, complex language, and culture explode."
  },
  
  // --- FUTURE ---
  {
    id: "future",
    query: "Human_evolution",
    displayTitle: "The Future?",
    era: "Tomorrow",
    description: "From gene editing to space travel. Where do we go next?"
  }
];
