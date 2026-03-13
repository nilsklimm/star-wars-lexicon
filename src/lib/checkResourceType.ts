import { RESOURCE_TYPES } from "@/constants/resources";

export const isValidResource = (resource: string): boolean => {
  return resource in RESOURCE_TYPES;
};
