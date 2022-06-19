import { TrashSimple } from "phosphor-react";

import styles from "./TodoItem.module.css";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  task: Task;
  handleDeleteTask: (id: number) => void;
  handleTaskMarking: (id: number) => void;
}

export function TodoItem({
  task,
  handleDeleteTask,
  handleTaskMarking,
}: TodoItemProps) {
  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={task.isCompleted} />
        <span onClick={() => handleTaskMarking(task.id)}></span>
      </div>

      <p style={task.isCompleted ? { textDecoration: "line-through" } : {}}>
        {task.description}
      </p>

      <button onClick={() => handleDeleteTask(task.id)}>
        <TrashSimple />
      </button>
    </div>
  );
}
