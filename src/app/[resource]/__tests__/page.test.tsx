import { ResourceKeyType } from "@/types/resources";
import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ResourceListPage from "../page";

window.scrollTo = jest.fn();

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    ok: true,
    json: () => Promise.resolve({
      count: 1,
      results: [{
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/people/1/",
      }],
    }),
  }),
) as jest.Mock;

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => key),
}));

jest.mock("next-intl/server", () => ({
  getTranslations: jest.fn(() => Promise.resolve((key: string) => key)),
}));

describe("Page", () => {
  it("renders 404 if resource is not valid", async () => {
    const params = Promise.resolve({ resource: "invalid-resource" as ResourceKeyType });
    const searchParams = Promise.resolve({ page: "1" });
    await expect(ResourceListPage({ params, searchParams }))
      .rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });

  it("renders the resource list", async () => {
    const params = Promise.resolve({ resource: "people" as ResourceKeyType });
    const searchParams = Promise.resolve({ page: "1" });
    const element = ResourceListPage({ params, searchParams });
    await act(() => render(element));

    await waitFor(() =>
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("people"),
    );

    await waitFor(() =>
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument(),
    );

    expect(screen.getByText("172")).toBeInTheDocument();
    expect(screen.getByText("77")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
    expect(screen.getByText("fair")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.getByText("19BBY")).toBeInTheDocument();
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.queryByText("https://swapi.dev/api/people/1/")).not.toBeInTheDocument();
  });
});
