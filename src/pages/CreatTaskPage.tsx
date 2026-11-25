import { useNavigate } from "react-router";
import type { NewTask } from "../types/Task";
import { NewTaskForm } from "../components/NewTaskForm";

type CreateTaskPageProps = {
  onAddTask: (task: NewTask) => Promise<void>;
};

const CreatTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();

  const executeOnAddTask = async (newTaskForm: NewTask) => {
    await onAddTask(newTaskForm);

    navigate("/");
  };

  return (
    <main>
      <h1>Skapa ny task</h1>
      <section className="Task-form-container">
        <NewTaskForm onAddTask={executeOnAddTask} />
      </section>
    </main>
  );
};
export default CreatTaskPage;
