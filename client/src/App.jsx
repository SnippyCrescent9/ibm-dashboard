import {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { createTask } from "./types/task";

function App() {
  const [tasks, setTasks] = useState([
    createTask("Learn React basics"),
    createTask("Build UI components")
  ]);

  const addTask = (title) => {
    const newTask = createTask(title);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{padding: "20px"}}>
      <h1>IBM Task Dashboard</h1>
      <TaskForm onAdd={addTask}/>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
      />
    </div>
  );

}

export default App;