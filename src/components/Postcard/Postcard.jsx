import { useLocation } from "react-router-dom";
import styles from "./Postcard.module.css";
import Nik2 from "../../images/Nik2.jpg";
import me2 from "../../images/me2.jpg";
import family from "../../images/family.jpg";

export const Postcard = () => {
  const location = useLocation();

  const getNameFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get("name") || "Гости";
  };

  const name = getNameFromUrl();
  return (
    <div className={styles.wrapper}>
      <section className={styles.postcard}>
        <h2>Дорогие {name}!</h2>
        <p>
          Мы рады сообщить Вам, что 27.09.2024 состоится самое главное торжество
          в нашей жизни - день нашей свадьбы!
        </p>
        <p>Приглашаем Вас разделить с нами радость этого незабываемого дня.</p>
        <time>27.09.2024 в 12:30</time>
        <div className={styles.imageWrapper}>
          <img src={family} alt="мы" className={styles.image} />
        </div>
        <p>Там, где посеяна любовь, растёт счастье</p>
        <div className={styles.imageWrapper}>
          <img
            src={Nik2}
            alt="жених"
            className={`${styles.image} ${styles.photo}`}
          />
        </div>
        <p>Жених</p>
        <div className={styles.imageWrapper}>
          <img
            src={me2}
            alt="невеста"
            className={`${styles.image} ${styles.photo}`}
          />
        </div>
        <p>Невеста</p>
      </section>
    </div>
  );
};
