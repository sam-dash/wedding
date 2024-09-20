import styles from "./Map.module.css";
import { useEffect } from "react";

export const Map = () => {
  useEffect(() => {
    let mapInstance = null;

    if (window.ymaps) {
      window.ymaps.ready(() => {
        mapInstance = new window.ymaps.Map("map", {
          center: [60.709915, 28.758989],
          zoom: 17,
        });

        const placemark = new window.ymaps.Placemark([60.709915, 28.758989], {
          balloonContent: "Это здесь!",
        });

        mapInstance.geoObjects.add(placemark);
      });
    }

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className={styles.adress}>ул. Тургенева, дом 3, Выборг</div>
      <div id="map" className={styles.map}></div>
    </>
  );
};
