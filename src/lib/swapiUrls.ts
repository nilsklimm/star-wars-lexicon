import { SWAPI_BASE_URL } from "@/constants/urls";

export const getResourceList = (resource: string, options?: { page?: number, search?: string }) => {
  const { page = 1, search } = options ?? {};

  const params = new URLSearchParams();
  params.set("page", page.toString());
  if (search) params.set("search", search);

  return `${SWAPI_BASE_URL}/${resource}/?${params.toString()}`;
};

export const getResourceDetails = (resource: string, uid: string) =>
  `${SWAPI_BASE_URL}/${resource}/${uid}/`;
