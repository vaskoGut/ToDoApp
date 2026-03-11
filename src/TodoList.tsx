import { useState, useMemo } from "react";
import { ToDoInput } from "./TodoInput";
import { TaskType, TASKS_STATUS, TodoListProps } from "./TodoListTypes";

export function TodoList({ setTasks, tasks }: TodoListProps) {
  const [filter, setFilter] = useState<string>(TASKS_STATUS.all);
  const handleSetTasks = (task: TaskType) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleTaskCheck = (completedTask: TaskType) => {
    setTasks((prev) => {
      const newTasks = prev.map((elem) =>
        elem.id === completedTask.id
          ? { ...elem, completed: !elem.completed }
          : elem
      );
      return newTasks;
    });
  };

  const handleDeleteTask = (id: string) => {
    const filteredTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(filteredTasks);
  };

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === TASKS_STATUS.completed) return task.completed === true;
        if (filter === TASKS_STATUS.all) return true;
        if (filter === TASKS_STATUS.toDo) return task.completed !== true;
      }),
    [tasks, filter]
  );

  return (
    <>
      <p>List of tasks</p>
      <p>
        <button onClick={() => setFilter(TASKS_STATUS.all)}>all</button>
        <button onClick={() => setFilter(TASKS_STATUS.completed)}>
          completed
        </button>
        <button onClick={() => setFilter(TASKS_STATUS.toDo)}>toDo</button>
      </p>
      <div>
        {filteredTasks?.map((elem) => (
          <div className="task-wrapper" key={elem.id}>
            <span
              className={elem.completed ? `list-item completed` : "list-item"}
            >
              {elem?.value}{" "}
            </span>
            <p>
              complete task:{" "}
              <input
                checked={elem.completed}
                onChange={() => handleTaskCheck(elem)}
                type="checkbox"
              />
            </p>
            <button onClick={() => handleDeleteTask(elem.id)}>
              delete task
            </button>
          </div>
        ))}
      </div>
      <ToDoInput addTaskToList={handleSetTasks} />
    </>
  );
}
