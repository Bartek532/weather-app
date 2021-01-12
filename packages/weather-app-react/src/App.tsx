import "./App.css";
import { SearchControls } from "./components/SearchControls";
import { WeatherProvider } from "./components/WeatherContext";
import { Home } from "./views/Home";
import { Daily } from "./views/Daily";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getListOfDays } from "./utils";

function App() {
  console.log(getListOfDays());
  return (
    <WeatherProvider>
      <SearchControls />
      <Loader />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/daily" exact component={Daily} />
        </Switch>
        <Navbar />
      </Router>
    </WeatherProvider>
  );
}

export default App;
