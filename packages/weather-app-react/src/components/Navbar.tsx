import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="link" activeClassName="link--active" exact>
        <div className="link__icon">
          <HomeIcon />
        </div>
        <span className="link__text">Home</span>
      </NavLink>
      <NavLink to="/daily" className="link" activeClassName="link--active">
        <span className="link__text">Daily</span>
        <div className="link__icon">
          <CalendarIcon />
        </div>
      </NavLink>
    </nav>
  );
};
