import { render, screen, fireEvent } from "@testing-library/vue";
import DaysList from "./DaysList.vue";
import type { DailyWeatherItem } from "@/types";
import store from "@/store";

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

test("should update daily weather when day is selected", async () => {
  const wrapper = render(
    DaysList, { props: { weather: fakeWeather, activeDayIndex: 0 }  }
  );

  expect(screen.getByRole("button", { name: /tuesday/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /tuesday/i })).toHaveClass(
    "day--active"
  );

  const fridayBtn = screen.getByRole("button", { name: /friday/i });
  await fireEvent.click(fridayBtn);
  
  expect(wrapper.emitted()['change-active-day'][0]).toEqual([3]);
});
