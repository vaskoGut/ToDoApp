import { TodoList } from "./TodoList";
import { TaskType } from "./TodoListTypes";

import { useState, useEffect } from "react";
import "./styles.css";

const LOCAL_STOR_KEY = "taskTodorr";

const useLocalStorageToDos = () => {
  const [todos, setTodos] = useState<TaskType[]>(() => {
    const stored = localStorage.getItem(LOCAL_STOR_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STOR_KEY, JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos] as const;
};

export default function App() {
  const [todos, setTodos] = useLocalStorageToDos();
  return (
    <>
      <TodoList setTasks={setTodos} tasks={todos} />
    </>
  );
}
