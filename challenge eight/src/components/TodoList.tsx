import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task: "New Task",
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.done ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;