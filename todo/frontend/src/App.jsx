import "./App.css";
import { Todos } from "./components/Todos";
import { CreateTodo } from "./components/CreateTodo";

function App() {
  return (
    <main className="page">
      <CreateTodo />
      <Todos />
    </main>
  );
}

export default App;
