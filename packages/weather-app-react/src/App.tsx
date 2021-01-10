import "./App.css";
import { SearchControls } from "./components/SearchControls";
import { WeatherProvider } from "./components/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <SearchControls />
    </WeatherProvider>
  );
}

export default App;
