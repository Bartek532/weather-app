import { calculateTemp } from "../../utils";

export const MainInfo = ({
  iconCode,
  temperature,
  city,
  country,
  iconDescription
}: {
  iconCode: string;
  temperature: number;
  city: string;
  country: string;
  iconDescription: string;
}) => {
  return (
    <section className="main-info">
      <h1 className="main-info__title">Weather forecast</h1>
      <img
        src={require(`../../assets/icons/weather/${iconCode}.svg`).default}
        alt={iconDescription}
        className="main-info__icon"
      />
      <span className="main-info__temp">
        <span className="sr-only">current temperature</span>
        {calculateTemp(temperature, 1)}
        <sup>°</sup>
      </span>
      <span className="main-info__place">
        {city}, {country}
      </span>
    </section>
  );
};
