import { useState } from "react";

export const Todo = () => {
  const [tasks, setTasks] = useState(["do dsa"]);
  const [addTodo, setAddTodo] = useState("");

  const addHandler = () => {
    setTasks([...tasks, addTodo]);
    setAddTodo("");
  };

  return (
    <div>
      <h1>To do list</h1>
      <input
        placeholder="enter todo"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
