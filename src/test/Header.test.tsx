import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "../components/Header";

describe("Header component", () => {
  it("renders the header with correct text", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveTextContent("Task board");

    const descriptionElement = screen.getByText("beskrivande text");
    expect(descriptionElement).toBeInTheDocument();
  });
});
