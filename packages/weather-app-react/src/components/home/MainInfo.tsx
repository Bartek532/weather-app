import { calculateTemp } from "../../utils";

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
    <div className="main-info">
      <h1 className="main-info__title">Weather forecast</h1>
      <img
        src={require(`../../assets/icons/weather/${iconCode}.svg`).default}
        alt="weather-icon"
        className="main-info__icon"
      />
      <span className="main-info__temp">
        {calculateTemp(temperature, 1)}
        <sup>°</sup>
      </span>
      <span className="main-info__place">
        {city}, {country}
      </span>
    </div>
  );
};
