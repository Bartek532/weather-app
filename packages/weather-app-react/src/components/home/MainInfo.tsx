import { useEffect, useState } from "react";
import { importIcon } from "../../utils";

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
    async function getIcon() {
      setIcon(await importIcon(iconCode));
    }

    getIcon();
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
