import { ReactComponent as WindIcon } from "../../assets/icons/additional/wind.svg";
import { ReactComponent as CloudIcon } from "../../assets/icons/additional/cloudiness.svg";
import { ReactComponent as HumidityIcon } from "../../assets/icons/additional/humidity.svg";
import { ReactComponent as PressureIcon } from "../../assets/icons/additional/pressure.svg";

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
    <ul className="additional-info">
      <span className="additional-info__title">Additional info</span>
      <li className="additional-info__item">
        <WindIcon className="additional-info__item__icon" />
        <span className="additional-info__item__text">{wind}m/s</span>
      </li>
      <li className="additional-info__item">
        <PressureIcon className="additional-info__item__icon" />
        <span className="additional-info__item__text">{pressure}hPa</span>
      </li>
      <li className="additional-info__item">
        <HumidityIcon className="additional-info__item__icon" />
        <span className="additional-info__item__text">{humidity}%</span>
      </li>
      <li className="additional-info__item">
        <CloudIcon className="additional-info__item__icon" />
        <span className="additional-info__item__text">{cloudiness}%</span>
      </li>
    </ul>
  );
};
