import { HourlyWeatherItem } from "./HourlyWeatherItem";

export const HourlyWeather = ({
  temp
}: {
  temp: { morn: number; day: number; eve: number; night: number };
}) => {
  const startHour = 8;
  return (
    <div>
      {Object.values(temp).map((item, index) => (
        <HourlyWeatherItem
          temp={Number(item)}
          hour={startHour + 5 * index}
          key={index}
        />
      ))}
    </div>
  );
};
