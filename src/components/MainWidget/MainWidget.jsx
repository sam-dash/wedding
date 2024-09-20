import styles from "./MainWidget.module.css";
import { Countdown } from "../Countdown/Countdown";
import { Postcard } from "../Postcard/Postcard";
import { Schedule } from "./../Schedule/Schedule";
import { Map } from "../Map/Map";
import Nik from "../../images/Nik.jpg";
import me from "../../images/me.jpg";

export const MainWidget = () => {
  const targetDate = new Date("2024-09-27T12:30:00");

  return (
    <section className={styles.main}>
      <div className={styles.imageUser}>
        <img src={Nik} alt="Фото жениха" />
        <p>Никита</p>
      </div>
      <span className={styles.pluse}>+</span>
      <div className={styles.imageUser}>
        <img src={me} alt="Фото невесты" />
        <p>Дарья</p>
      </div>
      <p className={styles.initials}>Н + Д =</p>
      <p className={styles.slogan}>МЫ ВЫРОСЛИ, И ТЕПЕРЬ НАМ МОЖНО</p>
      <time dateTime="2024-09-27" className={styles.date}>
        27 сентября 2024
      </time>
      <Countdown targetDate={targetDate} />
      <Postcard />
      <Schedule />
      <Map />
    </section>
  );
};
