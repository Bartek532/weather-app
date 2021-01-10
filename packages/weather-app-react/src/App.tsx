import "./App.css";
import { SearchControls } from "./components/SearchControls";
import { WeatherProvider } from "./components/WeatherContext";
import { Loader } from "./components/Loader";

function App() {
  return (
    <WeatherProvider>
      <Loader />
      <SearchControls />
    </WeatherProvider>
  );
}

export default App;
