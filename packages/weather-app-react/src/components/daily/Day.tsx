export const Day = ({
  icon,
  day,
  changeDay
}: {
  icon: string;
  day: string;
  changeDay: (day: string) => void;
}) => {
  return (
    <button className="day" onClick={changeDay.bind(null, day)}>
      <img
        src={require(`../../assets/icons/weather/${icon}.svg`).default}
        alt="weather-icon"
      />
      <span>{day}</span>
    </button>
  );
};
