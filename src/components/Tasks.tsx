import { useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Message } from "./Message";

import styles from "./Tasks.module.css";

export function Tasks() {
  const [createdTasks, setCreatedTasks] = useState(5);
  const [completedTasks, setCompletedTasks] = useState(2);

  return (
    <div className={styles.container}>
      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma tarefa" />

        <button>
          <span>Criar</span>
          <PlusCircle />
        </button>
      </div>

      <div className={styles.tasks}>
        <header>
          <div className={styles.createdTasks}>
            Tarefas criadas <span>{createdTasks}</span>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            <span>
              {completedTasks} de {createdTasks}
            </span>
          </div>
        </header>

        <Message />
      </div>
    </div>
  );
}
