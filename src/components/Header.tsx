import rocketImg from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketImg} alt="logotipo foguete" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
