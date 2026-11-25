import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Column } from "../components/Column";

describe("Column component", () => {
    it("renders the column with correct title and children", () => {
        render(<Column title="todo">Child content</Column>);

        const titleElement = screen.getByRole("heading", { level: 2 });
        expect(titleElement).toHaveTextContent("todo");

        const childElement = screen.getByText("Child content");
        expect(childElement).toBeInTheDocument();
    });
});