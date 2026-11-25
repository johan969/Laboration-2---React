import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskCard } from "../components/TaskCard";

describe("TaskCard component", () => {
  it("renders the task card with correct title and description", () => {
    const FakeTask = {
      id: 1,
      Title: "Test Task title",
      Description: "This is a test task description",
      assaignee: "John Doe",
      category: "Testing",
      priority: "High",
    };

    render(
      <TaskCard
        id={FakeTask.id}
        Title={FakeTask.Title}
        Description={FakeTask.Description}
        assaignee={FakeTask.assaignee}
        category={FakeTask.category}
        priority={FakeTask.priority}
      />,
    );

    expect(screen.getByText(FakeTask.Title)).toBeInTheDocument();
    expect(screen.getByText(FakeTask.Description)).toBeInTheDocument();
    expect(screen.getByText(FakeTask.assaignee)).toBeInTheDocument();
    expect(screen.getByText(FakeTask.category)).toBeInTheDocument();
    expect(screen.getByText(FakeTask.priority)).toBeInTheDocument();
  });
});
