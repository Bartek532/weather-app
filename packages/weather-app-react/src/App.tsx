import "./App.css";
import { SearchControls } from "./components/SearchControls";
import { WeatherProvider } from "./components/WeatherContext";
import { Home } from "./views/Home";
import { Loader } from "./components/Loader";

function App() {
  return (
    <WeatherProvider>
      <SearchControls />
      <Home />
      <Loader />
    </WeatherProvider>
  );
}

export default App;
