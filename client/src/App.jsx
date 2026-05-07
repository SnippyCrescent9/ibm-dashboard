import {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { createTask } from "./types/task";

function App() {
  const [tasks, setTasks] = useState([
    createTask("Learn React basics"),
    createTask("Build UI components")
  ]);

  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    const newTask = createTask(title);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {...task, completed: !task.completed}
          : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      fontFamily: "Arial"
    }}>
      <h1>IBM Task Dashboard</h1>
      <TaskForm onAdd={addTask}/>
      <div style={{marginBottom: "20px"}}>
        <button onClick={() => setFilter("all")}>
          All
        </button>
        <button onClieck={()=> setFilter("active")}>
          Active
        </button>
        <button onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );

}

export default App;