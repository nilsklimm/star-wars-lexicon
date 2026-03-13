type SchemaType = {
  name: string;
  attrs: string[];
  texts?: string[];
  links: string[];
  meta: string[]
};

export enum RESOURCE_TYPES {
  people = "people",
  planets = "planets",
  films = "films",
  species = "species",
  vehicles = "vehicles",
  starships = "starships",
};

export const PEOPLE_SCHEMA: SchemaType = {
  name: "name",
  attrs: [
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

export const PLANET_SCHEMA: SchemaType = {
  name: "name",
  attrs: [
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

export const FILM_SCHEMA: SchemaType = {
  name: "title",
  attrs: ["title", "episode_id", "director", "producer", "release_date"],
  texts: ["opening_crawl"],
  links: ["characters", "planets", "starships", "vehicles", "species"],
  meta: ["created", "edited"],
};

export const SPECIES_SCHEMA: SchemaType = {
  name: "name",
  attrs: [
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

export const VEHICLE_SCHEMA: SchemaType = {
  name: "name",
  attrs: [
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

export const STARSHIP_SCHEMA: SchemaType = {
  name: "name",
  attrs: [
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

export const RESOURCE_SCHEMAS: Record<RESOURCE_TYPES, SchemaType> = {
  [RESOURCE_TYPES.people]: PEOPLE_SCHEMA,
  [RESOURCE_TYPES.planets]: PLANET_SCHEMA,
  [RESOURCE_TYPES.films]: FILM_SCHEMA,
  [RESOURCE_TYPES.species]: SPECIES_SCHEMA,
  [RESOURCE_TYPES.vehicles]: VEHICLE_SCHEMA,
  [RESOURCE_TYPES.starships]: STARSHIP_SCHEMA,
} as const;
