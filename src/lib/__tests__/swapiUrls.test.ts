import { getResourceDetails, getResourceList } from "../swapiUrls"; // Adjust the import path as necessary

describe("getResourceList", () => {
  it("creates url with default page when no options are provided", () => {
    const url = getResourceList("people");

    expect(url).toBe("https://swapi.dev/api/people/?page=1");
  });

  it("creates url with custom page", () => {
    const url = getResourceList("planets", { page: 3 });

    expect(url).toBe("https://swapi.dev/api/planets/?page=3");
  });

  it("adds search parameter when provided", () => {
    const url = getResourceList("people", { search: "luke" });

    expect(url).toBe("https://swapi.dev/api/people/?page=1&search=luke");
  });

  it("adds page and search parameters together", () => {
    const url = getResourceList("people", { page: 2, search: "vader" });

    expect(url).toBe("https://swapi.dev/api/people/?page=2&search=vader");
  });

  it("encodes search parameters correctly", () => {
    const url = getResourceList("people", { search: "luke skywalker" });

    expect(url).toBe(
      "https://swapi.dev/api/people/?page=1&search=luke+skywalker"
    );
  });
});

describe("getResourceDetails", () => {
  it("creates correct resource details url", () => {
    const url = getResourceDetails("people", 1);

    expect(url).toBe("https://swapi.dev/api/people/1/");
  });

  it("works with other resource types", () => {
    const url = getResourceDetails("planets", 5);

    expect(url).toBe("https://swapi.dev/api/planets/5/");
  });
});
