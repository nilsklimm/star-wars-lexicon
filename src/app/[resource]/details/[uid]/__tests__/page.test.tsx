import { ResourceKeyType } from "@/types/resources";
import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ResourceDetailsPage from "../page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    ok: true,
    json: () => Promise.resolve({
      name: "Luke Skywalker",
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
    const params = Promise.resolve({ resource: "invalid-resource" as ResourceKeyType, uid: "1" });
    await expect(ResourceDetailsPage({ params }))
      .rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
  });

  it("renders the resource list", async () => {
    const params = Promise.resolve({ resource: "people" as ResourceKeyType, uid: "1" });
    const element = ResourceDetailsPage({ params });
    await act(() => render(element));

    await waitFor(() =>
      expect(screen.getByText("Luke Skywalker")).toBeInTheDocument(),
    );
  });
});
