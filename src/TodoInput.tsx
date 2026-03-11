import { useState, ChangeEvent } from "react";
import { AddTaskToListType } from "./TodoListTypes";

export function ToDoInput({ addTaskToList }: AddTaskToListType) {
  const [currentTask, setCurrentTask] = useState<string>("");

  const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTaskToList = () => {
    if (!currentTask.trim()) return;
    addTaskToList({
      value: currentTask,
      completed: false,
      id: crypto.randomUUID(), // or new Date().toString()
    });
    setCurrentTask("");
  };

  return (
    <>
      <input value={currentTask} onChange={handleTask} type="text" />
      <button
        aria-label="add task to list"
        onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
          if (e.key === "enter") handleAddTaskToList();
        }}
        onClick={handleAddTaskToList}
      >
        add task
      </button>
    </>
  );
}
