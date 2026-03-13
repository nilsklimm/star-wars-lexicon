import { isValidResource } from "../checkResourceType";

describe("isValidResource", () => {
  it("should return true for valid resource types", () => {
    expect(isValidResource("people")).toBe(true);
    expect(isValidResource("planets")).toBe(true);
    expect(isValidResource("films")).toBe(true);
    expect(isValidResource("species")).toBe(true);
    expect(isValidResource("vehicles")).toBe(true);
    expect(isValidResource("starships")).toBe(true);
  });

  it("should return false for invalid resource types", () => {
    expect(isValidResource("invalidResource")).toBe(false);
    expect(isValidResource("anotherInvalidResource")).toBe(false);
    expect(isValidResource("")).toBe(false);
  });
});
