import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="link" activeClassName="link--active" exact>
        <HomeIcon className="link__icon" />
        <span className="link__text">Home</span>
      </NavLink>
      <NavLink to="/daily" className="link" activeClassName="link--active">
        <span className="link__text">Daily</span>
        <CalendarIcon className="link__icon" />
      </NavLink>
    </nav>
  );
};
