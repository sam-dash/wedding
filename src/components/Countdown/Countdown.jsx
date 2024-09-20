import { useState, useEffect } from "react";
import { pluralize } from "numeralize-ru";
import styles from "./Countdown.module.css";

// eslint-disable-next-line react/prop-types
export const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <article className={styles.timeAgo}>
      <span className={styles.time}>
        <p className={styles.number}>{timeLeft.days}</p>{" "}
        <p>{pluralize(timeLeft.days, "день", "дня", "дней")}</p>
      </span>
      <span className={styles.time}>
        <p className={styles.number}>{timeLeft.hours}</p>{" "}
        <p>{pluralize(timeLeft.hours, "час", "часа", "часов")}</p>
      </span>
      <span className={styles.time}>
        <p className={styles.number}>{timeLeft.minutes} </p>
        <p>{pluralize(timeLeft.minutes, "минута", "минуты", "минут")}</p>
      </span>
      <span className={styles.time}>
        <p className={styles.number}>{timeLeft.seconds} </p>
        <p>{pluralize(timeLeft.seconds, "секунда", "секунды", "секунд")}</p>
      </span>
    </article>
  );
};
