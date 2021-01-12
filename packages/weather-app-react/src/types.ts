export type Coordinates = {
  lat: number;
  lon: number;
};

export type Wind = {
  deg: number;
  speed: number;
};

export type Temperature = {
  morn: number;
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
};

export type CurrentWeatherItemType = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type CurrentWeatherType = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };

  timezone: number;
  visibility: number;
  weather: CurrentWeatherItemType[];
  wind: Wind;
};

export type BasicWeatherInfo = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: CurrentWeatherItemType[];
  wind_deg: number;
  wind_speed: number;
};

export type DailyWeatherItem = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temperature;
  uvi: number;
  weather: CurrentWeatherItemType[];
  wind_deg: number;
  wind_speed: number;
};

export type DailyWeatherType = {
  current: BasicWeatherInfo;
  daily: DailyWeatherItem[];
  hourly: Partial<BasicWeatherInfo>[];
  lat: number;
  lon: number;
  minutely: { dt: number; precipitation: number }[];
  timezone: string;
  timezone_offset: number;
};

export type Timezone = {
  countryName: string;
  hour: number;
};
