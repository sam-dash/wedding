import styles from "./Map.module.css";
import { useEffect } from "react"; // Импортируем хук useEffect из React.

export const Map = () => {
  useEffect(() => {
    let mapInstance = null;

    // Проверяем, загружен ли API Яндекс.Карт.
    if (window.ymaps) {
      window.ymaps.ready(() => {
        mapInstance = new window.ymaps.Map("map", {
          center: [60.709915, 28.758989], // Координаты центра карты.
          zoom: 17, // Уровень масштабирования карты.
        });

        const placemark = new window.ymaps.Placemark([60.709915, 28.758989], {
          // Создаем метку на карте.
          balloonContent: "Это здесь!",
        });

        // Добавляем метку на карту.
        mapInstance.geoObjects.add(placemark);
      });
    }

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, []);

  return <div id="map" className={styles.map}></div>;
};
