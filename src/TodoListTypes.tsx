export type TaskType = {
  value: string;
  completed: boolean;
  id: string;
};

export type AddTaskToListType = {
  addTaskToList: (task: TaskType) => void;
};

export enum TASKS_STATUS {
  completed = "COMPLETED",
  all = "ALL",
  toDo = "TODO",
}

export type TodoListProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};
