export const PEOPLE_SCHEMA = {
  name: "name",
  props: [
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
  ],
  links: ["homeworld", "films", "species", "vehicles", "starships"],
  meta: ["created", "edited"],
};

export const PLANET_SCHEMA = {
  name: "name",
  props: [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
  ],
  links: ["residents", "films"],
  meta: ["created", "edited"],
};

export const FILM_SCHEMA = {
  name: "title",
  props: ["title", "episode_id", "director", "producer", "release_date"],
  details: ["opening_crawl"],
  links: ["characters", "planets", "starships", "vehicles", "species"],
  meta: ["created", "edited"],
};

export const SPECIES_SCHEMA = {
  name: "name",
  props: [
    "name",
    "classification",
    "designation",
    "average_height",
    "skin_colors",
    "hair_colors",
    "eye_colors",
    "average_lifespan",
    "language",
  ],
  links: ["homeworld", "people", "films"],
  meta: ["created", "edited"],
};

export const VEHICLE_SCHEMA = {
  name: "name",
  props: [
    "name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "passengers",
    "cargo_capacity",
    "consumables",
    "vehicle_class",
  ],
  links: ["pilots", "films"],
  meta: ["created", "edited"],
};

export const STARSHIP_SCHEMA = {
  name: "name",
  props: [
    "name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "passengers",
    "cargo_capacity",
    "consumables",
    "hyperdrive_rating",
    "MGLT",
    "starship_class",
  ],
  links: ["pilots", "films"],
  meta: ["created", "edited"],
};

export const RESOURCE_SCHEMAS = {
  people: PEOPLE_SCHEMA,
  planets: PLANET_SCHEMA,
  films: FILM_SCHEMA,
  species: SPECIES_SCHEMA,
  vehicles: VEHICLE_SCHEMA,
  starships: STARSHIP_SCHEMA,
} as const;

export type ResourceKeyType = keyof typeof RESOURCE_SCHEMAS;

export const RESOURCE_KEYS = Object.keys(RESOURCE_SCHEMAS) as ResourceKeyType[];
