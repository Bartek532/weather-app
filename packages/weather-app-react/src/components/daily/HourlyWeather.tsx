import { HourlyWeatherItem } from "./HourlyWeatherItem";

const diffBetweenHours = 5;

export const HourlyWeather = ({
  temp
}: {
  temp: { morn: number; day: number; eve: number; night: number };
}) => {
  const startHour = 8;
  return (
    <div className="daily__hourly-weather">
      {Object.values(temp).map((item, index) => (
        <HourlyWeatherItem
          temp={Number(item)}
          hour={startHour + diffBetweenHours * index}
          key={index}
        />
      ))}
    </div>
  );
};
