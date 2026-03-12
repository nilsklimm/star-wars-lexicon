import { extractIdFromUrl } from "../extractIdFromUrl"; // adjust path as needed

describe("extractIdFromUrl", () => {
  it("extracts the ID from a people URL", () => {
    const url = "https://swapi.dev/api/people/1/";
    expect(extractIdFromUrl(url)).toBe("1");
  });

  it("extracts the ID from a planets URL without trailing slash", () => {
    const url = "https://swapi.dev/api/planets/42";
    expect(extractIdFromUrl(url)).toBe("42");
  });

  it("returns null if no ID is present", () => {
    const url = "https://swapi.dev/api/starships/";
    expect(extractIdFromUrl(url)).toBeNull();
  });
});
