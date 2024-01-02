import axios from "axios";
import { useState } from "react";

export function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: "false",
  });

  const handleClick = async () => {
    await axios.post("http://localhost:3001/todo", todo);
  };

  return (
    <section className="todo-form">
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo((todo) => ({
            ...todo,
            title: e.target.value,
          }))
        }
      />
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo((todo) => ({
            ...todo,
            description: e.target.value,
          }))
        }
      />
      <button onClick={handleClick}>Add todo</button>
    </section>
  );
}
