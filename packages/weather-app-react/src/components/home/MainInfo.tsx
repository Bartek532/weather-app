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
    <div>
      <h1>Weather forecast</h1>
      <img
        src={require(`../../assets/icons/weather/${iconCode}.svg`).default}
        alt="weather-icon"
      />
      <span>{calculateTemp(temperature, 1)} C</span>
      <span>
        {city}, {country}
      </span>
    </div>
  );
};
