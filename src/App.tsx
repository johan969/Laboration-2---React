import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";
import { useEffect, useState } from "react";
import type { task } from "./types/Task";
import CreatTaskPage from "./pages/CreatTaskPage";


import { Link, Route, Routes } from "react-router";
import TaskPage from "./pages/TaskPage";


// const tasks: task[] = [


function App() {
  const apiUrl = "http://localhost:3001/api/tasks";

  const [taskList, setTaskList] = useState<task[]>([]);


  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Kunde inte hämta tasks");
      const result: task[] = await response.json();
      setTaskList(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void fetchTasks();
  }, []);

  const addTask = async (newTask: task) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Kunde inte spara tasken");
      }

      setTaskList((currentTasks) => [...currentTasks, newTask]);
    } catch (error) {
      console.log(error);
    }
  };


return (
  <div className="app-container">
    <Header />

    <nav className="nav-container">
      <Link to="/">Tasks</Link>
      <Link to="/create">Skapa task</Link>
    </nav>

    <Routes>
      <Route path="/" element={<TaskPage tasks={taskList} />} />
      <Route
        path="/create"
        element={<CreatTaskPage onAddTask={addTask} />}
      />
    </Routes>
    <Footer />
  </div>
);
}





  



export default App;