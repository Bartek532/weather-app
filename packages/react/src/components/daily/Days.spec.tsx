import { render, screen } from "@testing-library/react";
import { DaysList } from "./DaysList";
import type { DailyWeatherItem } from "../../types";
import userEvent from "@testing-library/user-event";
import { WeatherProvider } from "../../context/WeatherContext";

const fakeWeather = new Array(10).fill(null).map(_ => ({
  dt: Math.random(),
  temp: 245,
  weather: [
    {
      icon: "10d",
      description: "cloudy",
    },
  ],
})) as unknown as DailyWeatherItem[];

jest.mock("../../utils", () => {
  return {
    getListOfDays: () => {
      return [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
      ];
    },
  };
});

test("should update daily weather when day is selected", () => {
  render(
    <WeatherProvider>
      <DaysList weather={fakeWeather} />
    </WeatherProvider>
  );

  expect(screen.getByRole("button", { name: /tuesday/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /tuesday/i })).toHaveClass(
    "day__btn--active"
  );

  const fridayBtn = screen.getByRole("button", { name: /friday/i });
  userEvent.click(fridayBtn);
  expect(fridayBtn).toHaveClass("day__btn--active");
});
