import { render, screen, fireEvent } from "@testing-library/vue";
import { BasicWeatherInfo } from "@/types";
import HourlyWeather from "./HourlyWeather.vue";

const fakeTime = {
  countryName: "Great Britain",
  hour: 13,
};

const fakeWeather = new Array(30).fill(null).map(_ => ({
  dt: Math.random(),
  temp: 245,
  weather: [
    {
      icon: "10d",
      description: "cloudy",
    },
  ],
})) as BasicWeatherInfo[];

test("should properly switch between today and tomorrow hourly weather", async () => {
  render(HourlyWeather, {
    props: { weather: fakeWeather, timezone: fakeTime },
  });

  const todayButton = screen.getByRole("button", { name: /today/i });
  const tomorrowButton = screen.getByRole("button", { name: /tomorrow/i });

  expect(screen.getByText(/hourly weather today/i)).toBeInTheDocument();
  expect(todayButton).toHaveClass("hourly__navbar__item--active");
  expect(screen.getByText(/15:00/i)).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(4);

  await fireEvent.click(tomorrowButton);

  expect(screen.getByText(/hourly weather tomorrow/i)).toBeInTheDocument();
  expect(tomorrowButton).toHaveClass("hourly__navbar__item--active");
  expect(screen.getByText(/10:00/i)).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(4);

  await fireEvent.click(todayButton);

  expect(screen.getByText(/hourly weather today/i)).toBeInTheDocument();
  expect(todayButton).toHaveClass("hourly__navbar__item--active");
  expect(screen.getByText(/15:00/i)).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(4);
});
