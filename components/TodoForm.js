import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="form my-6" onSubmit={handleSubmit}>
      <div className="flex flex-col text-sm mb-2">
        <label className="font-bold mb-2 text-gray-800" htmlFor="todo">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Type Todo"
          className="border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
        />
      </div>
      <button
        className="w-full rounded bg-blue-500 hover:bg-blue-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
