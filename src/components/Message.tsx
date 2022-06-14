import clipboardImg from "../assets/clipboard.svg";

import styles from "./Message.module.css";

export function Message() {
  return (
    <div className={styles.message}>
      <img src={clipboardImg} alt="ícone de uma prancheta com texto" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
