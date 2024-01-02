import { useEffect, useState } from "react";
import axios from "axios";

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/todos")
      .then((res) => setTodos(res.data.todos));
  }, []);

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <div key={todo._id} className="todo">
          <h4 className="todo__title">{todo.title}</h4>
          <p className="todo__description">{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
