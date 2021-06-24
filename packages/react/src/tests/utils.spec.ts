import {
    getListOfDays,
    calculateHour,
    calculateTemp,
    getCurrentWeather,
  } from "../utils";
  import axios from "axios";
  
  jest.mock("axios");
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  
  test("getListOfDays returns a list of days", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));
    expect(getListOfDays()).toEqual([
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
    ]);
  });
  
  test("calculateHour returns shifted hour in 24h system", () => {
    expect(calculateHour(12, 6)).toBe(18);
    expect(calculateHour(23, 5)).toBe(4);
  });
  
  test("calculateTemp returns celcius temperature with given precision", () => {
    expect(calculateTemp(321, 1)).toBeCloseTo(47.5);
    expect(calculateTemp(267, 0)).toBe(-6);
  });
  
  describe("api calls", () => {
    it("returns a data when all is ok", async () => {
      mockedAxios.get.mockResolvedValue({ data: { weather: {} } });
      const data = await getCurrentWeather("London");
      expect(mockedAxios.get).toBeCalledTimes(1);
      expect(data).toEqual({ weather: {} });
    });
  
    it("throws an error when error is occurs", async () => {
      mockedAxios.get.mockRejectedValue(new Error("error"));
      await expect(getCurrentWeather("London")).rejects.toThrow("error");
    });
  });
  