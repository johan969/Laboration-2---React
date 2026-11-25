import { useState } from "react";
import type { task } from "../types/Task";

type TaskFormProps = {
  onAddTask: (newTask: task) => void;
};

export const NewTaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask({
      id: Date.now(),
      title,
      description,
      assignee,
      category,
      priority,
      status: "todo",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Titel:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Beskrivning:</label>
        <input
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="assignee">Ansvarig:</label>
        <input
          id="assignee"
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Prioritet:</label>
        <input
          id="priority"
          type="text"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        />
      </div>
      <button type="submit">Skapa task</button>
    </form>
  );
};
