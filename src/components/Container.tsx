import { useMemo, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Message } from "./Message";

import styles from "./Container.module.css";
import { TodoItem } from "./TodoItem";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

export function Container() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [descriptionTask, setDescriptionTask] = useState("");

  const completedTasks = tasks.filter((task) => task.isCompleted);

  function handleCreateTask() {
    setTasks((state) => {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 65536),
          description: descriptionTask,
          isCompleted: false,
        },
      ];
    });

    setDescriptionTask("");
  }

  function handleDeleteTask(idTask: number) {
    const filterRemovedTask = tasks.filter((task) => task.id !== idTask);

    setTasks(filterRemovedTask);
  }

  function handleTaskMarking(idTask: number) {
    const changeTaskCompletedValue = tasks.map((task) => {
      if (task.id === idTask) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(changeTaskCompletedValue);
  }

  return (
    <div className={styles.container}>
      <div className={styles.newTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={descriptionTask}
          onChange={(event) => setDescriptionTask(event.target.value)}
        />

        <button onClick={handleCreateTask}>
          <span>Criar</span>
          <PlusCircle />
        </button>
      </div>

      <div className={styles.tasks}>
        <header>
          <div className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            <span>
              {completedTasks.length} de {tasks.length}
            </span>
          </div>
        </header>

        {tasks.length > 0 ? (
          <div className={styles.todoList}>
            {tasks.map((task) => {
              return (
                <TodoItem
                  handleTaskMarking={handleTaskMarking}
                  handleDeleteTask={handleDeleteTask}
                  task={task}
                  key={task.id}
                />
              );
            })}

            {/* 
          {completedTasks.map((task) => {
            return (
              <TodoItem
                handleTaskMarking={handleTaskMarking}
                task={task}
                key={task.description}
              />
            );
          })} */}
          </div>
        ) : (
          <Message />
        )}
      </div>
    </div>
  );
}
