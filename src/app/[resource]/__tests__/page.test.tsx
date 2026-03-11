import { getResourceList } from "@/lib/swapiUrls";
import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ResourceListPage from "../page";

window.scrollTo = jest.fn();

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn((url: string) => {
    switch(url) {
    case getResourceList("people", { page: 1 }):
      return ({
        data: {
          count: 1,
          results: [{ name: "Luke Skywalker" }]
        }
      });
    case getResourceList("people", { page: 2 }):
      return ({
        data: {
          count: 1,
          results: [{ name: "Anakin Skywalker" }]
        }
      });
    default:
      return ({ data: null, error: new Error("Not found") });
    }
  }),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => key),
}));

describe("Page", () => {
  it("renders 404 if resource is not valid", async () => {
    const params = Promise.resolve({ resource: "invalid-resource" });
    await expect(ResourceListPage({ params })).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });

  it("renders the resource list", async () => {
    const params = Promise.resolve({ resource: "people" });
    const element = ResourceListPage({ params });
    await act(() => render(element));

    await waitFor(() =>
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("people")
    );

    await waitFor(() =>
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument()
    );
  });
});
