import "./App.scss";
import { WeatherProvider } from "./context/WeatherContext";
import { Main } from "./components/Main";

function App() {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
