import { Column } from "../components/Column";
import { TaskCard } from "../components/TaskCard";
import type { task } from "../types/Task";

type TaskPageProps = {
  tasks: task[];
};

const TaskPage = ({ tasks }: TaskPageProps) => {
  const todoTask = tasks.filter((task) => task.status === "todo");
  const doingTask = tasks.filter((task) => task.status === "doing");
  const doneTask = tasks.filter((task) => task.status === "done");

  return (
    <main>
      <section className="columns">
        <Column title="Todo">
          {todoTask.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              Title={task.title}
              Description={task.description}
              assaignee={task.assignee}
              category={task.category}
            />
          ))}
        </Column>
        <Column title="Doing">
          {doingTask.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              Title={task.title}
              Description={task.description}
              assaignee={task.assignee}
              category={task.category}
            />
          ))}
        </Column>
        <Column title="Done">
          {doneTask.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              Title={task.title}
              Description={task.description}
              assaignee={task.assignee}
              category={task.category}
            />
          ))}
        </Column>
      </section>
    </main>
  );
};

export default TaskPage;
