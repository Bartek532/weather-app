export const Day = ({
  icon,
  day,
  changeDay,
  isActive
}: {
  icon: string;
  day: string;
  changeDay: (day: string) => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={`day ${isActive ? "day--active" : null}`}
      onClick={changeDay.bind(null, day)}
      aria-label="day"
    >
      <img
        src={require(`../../assets/icons/weather/${icon}.svg`).default}
        alt="weather-icon"
        className="day__icon"
      />
      <span className="day__day-name">{day.substring(0, 3)}</span>
    </button>
  );
};
