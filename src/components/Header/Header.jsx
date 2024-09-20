import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#schedule-section">Расписание</a>
        <a href="#map">Место</a>
      </nav>
    </header>
  );
};
