import { calculateTemp } from "../../utils";
import styles from "../../assets/styles/home/MainInfo.module.scss";

export const MainInfo = ({
  iconCode,
  temperature,
  city,
  country
}: {
  iconCode: string;
  temperature: number;
  city: string;
  country: string;
}) => {
  return (
    <div className={styles.mainInfo}>
      <h1 className={styles["mainInfo__title"]}>Weather forecast</h1>
      <img
        src={require(`../../assets/icons/weather/${iconCode}.svg`).default}
        alt="weather-icon"
        className={styles["mainInfo__icon"]}
      />
      <span className={styles["mainInfo__temp"]}>
        {calculateTemp(temperature, 1)} <sup>°</sup>
      </span>
      <span className={styles["mainInfo__place"]}>
        {city}, {country}
      </span>
    </div>
  );
};
