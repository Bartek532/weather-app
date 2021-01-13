import { calculateTemp } from "../../utils";
import styles from "../../assets/styles/home/HourlyWeatherItem.module.scss";

export const HourlyWeatherItem = ({
  time,
  temp,
  icon
}: {
  time: number;
  temp: number;
  icon: string;
}) => {
  return (
    <div className={styles.item}>
      <span className={styles["item__time"]}>{time}:00</span>
      <img
        src={require(`../../assets/icons/weather/${icon}.svg`).default}
        alt="weather-icon"
        className={styles["item__icon"]}
      />
      <span className={styles["item__temp"]}>{calculateTemp(temp, 0)}°</span>
    </div>
  );
};
