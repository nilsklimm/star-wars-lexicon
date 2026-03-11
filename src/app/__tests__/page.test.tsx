import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => {
    const t = (key: string) => key;
    t.rich = (key: string) => <>{key}</>;
    return t;
  }),
}));

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
