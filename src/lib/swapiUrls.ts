
const SWAPI_BASE_URL = "https://swapi.dev/api";

export const getResourceList = (resource: string, options?: { page?: number, search?: string }) => {
  const { page = 1, search } = options ?? {};

  const params = new URLSearchParams();
  params.set("page", page.toString());
  if (search) params.set("search", search);

  return `${SWAPI_BASE_URL}/${resource}/?${params.toString()}`;
};

export const getResourceDetails = (resource: string, id: string) =>
  `${SWAPI_BASE_URL}/${resource}/${id}/`;
