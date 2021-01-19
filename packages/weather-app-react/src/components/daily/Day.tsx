export const Day = ({
  icon,
  day,
  iconDescription,
  changeDay,
  isActive
}: {
  icon: string;
  day: string;
  iconDescription: string;
  changeDay: (day: string) => void;
  isActive: boolean;
}) => {
  return (
    <li className="day">
      <button
        className={`day__btn ${isActive ? "day__btn--active" : null}`}
        onClick={() => changeDay(day)}
        aria-label="day"
      >
        <img
          src={require(`../../assets/icons/weather/${icon}.svg`).default}
          alt={`${iconDescription} icon`}
          className="day__icon"
        />
        <span className="day__day-name">{day.substring(0, 3)}</span>
      </button>
    </li>
  );
};
