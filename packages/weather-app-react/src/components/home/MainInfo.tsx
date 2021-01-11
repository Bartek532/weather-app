import { useEffect, useState } from "react";

export const MainInfo = ({
  iconCode,
  temperature,
  place
}: {
  iconCode: string;
  temperature: number;
  place: string;
}) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    async function loadIcon() {
      const item: { default: string } = await import(
        `../../assets/icons/weather/${iconCode}.svg`
      );
      setIcon(item.default);
    }

    loadIcon();
  }, [iconCode]);

  return (
    <div>
      <h1>Weather forecast</h1>
      <img src={icon} alt="weather-icon" />
      <span>{temperature.toFixed(1)} C</span>
      <span>{place}</span>
    </div>
  );
};
