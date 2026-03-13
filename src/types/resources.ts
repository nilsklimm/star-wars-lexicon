import { RESOURCE_TYPES } from "@/constants/resources";

export type ResourceKeyType = keyof typeof RESOURCE_TYPES;

export type ResourceItemType = {
  url: string;
  [key: string]: string | string[];
};

export type ResourceListType = {
  count: number;
  next?: string;
  previous?: string;
  results: ResourceItemType[];
};
