export const HourlyWeatherItem = ({
  temp,
  hour
}: {
  temp: number;
  hour: number;
}) => {
  return (
    <div>
      <div>{temp}</div>
      <div>{hour}</div>
    </div>
  );
};
