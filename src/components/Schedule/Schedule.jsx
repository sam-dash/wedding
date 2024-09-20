import styles from "./Schedule.module.css";

export const Schedule = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.schedule}>
        <h2 className={styles.title}>Свадебное расписание</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.leftAligned}>12:30</td>
              <td className={styles.rightAligned}>
                Торжественная роспись
                <p className={styles.registry}>ЗАГС</p>
                <p className={styles.tabelText}>
                  Приглашаем вас разделить вместе с нами радость создания новой
                  семьи
                </p>
              </td>
            </tr>
            <tr>
              <td className={styles.leftAligned}>13:00</td>
              <td className={styles.rightAligned}>
                Прогулка по старому Выборгу
                <p className={styles.tabelText}>Будем вешать свадебный замок</p>
              </td>
            </tr>
            <tr>
              <td className={styles.leftAligned}>14:00</td>
              <td className={styles.rightAligned}>
                Фуршет
                <p className={styles.registry}>Tokio City</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
