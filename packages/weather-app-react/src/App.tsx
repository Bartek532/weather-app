import "./App.scss";
import { WeatherProvider } from "./components/WeatherContext";
import { Main } from "./components/Main";

function App() {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
