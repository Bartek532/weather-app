import { ReactComponent as WindIcon } from "../../assets/icons/additional/wind.svg";
import { ReactComponent as CloudIcon } from "../../assets/icons/additional/cloudiness.svg";
import { ReactComponent as HumidityIcon } from "../../assets/icons/additional/humidity.svg";
import { ReactComponent as PressureIcon } from "../../assets/icons/additional/pressure.svg";
import styles from "../../assets/styles/home/AdditionalInfo.module.scss";

type AdditionalInfoType = {
  wind: number;
  pressure: number;
  humidity: number;
  cloudiness: number;
};

export const AdditionalInfo = ({
  wind,
  pressure,
  humidity,
  cloudiness
}: AdditionalInfoType) => {
  return (
    <div className={styles.additionalInfo}>
      <span className={styles["additionalInfo__title"]}>Additional info</span>
      <div className={styles["additionalInfo__item"]}>
        <WindIcon className={styles["additionalInfo__item__icon"]} />
        <span className={styles["additionalInfo__item__value"]}>{wind}m/s</span>
      </div>
      <div className={styles["additionalInfo__item"]}>
        <PressureIcon className={styles["additionalInfo__item__icon"]} />
        <span className={styles["additionalInfo__item__value"]}>
          {pressure}hPa
        </span>
      </div>
      <div className={styles["additionalInfo__item"]}>
        <HumidityIcon className={styles["additionalInfo__item__icon"]} />
        <span className={styles["additionalInfo__item__value"]}>
          {humidity}%
        </span>
      </div>
      <div className={styles["additionalInfo__item"]}>
        <CloudIcon className={styles["additionalInfo__item__icon"]} />
        <span className={styles["additionalInfo__item__value"]}>
          {cloudiness}%
        </span>
      </div>
    </div>
  );
};
