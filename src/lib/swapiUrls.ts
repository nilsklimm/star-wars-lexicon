
const SWAPI_BASE_URL = "https://swapi.dev/api/";

export const getResourceList = (slug: string, options?: { page?: number, search?: string }) => {
  const { page = 1, search } = options ?? {};

  const params = new URLSearchParams();
  params.set("page", page.toString());
  if (search) params.set("search", search);

  return `${SWAPI_BASE_URL}/${slug}/?${params.toString()}`;
};

export const getResourceDetails = (slug: string, id: number) =>
  `${SWAPI_BASE_URL}/${slug}/${id}/`;
