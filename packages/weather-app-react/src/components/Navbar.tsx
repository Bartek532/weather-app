import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="link">
        <div className="link__icon">
          <HomeIcon />
        </div>
        <span className="link__text">Home</span>
      </Link>
      <Link to="/about" className="link">
        <span className="link__text">Daily</span>
        <div className="link__icon">
          <CalendarIcon />
        </div>
      </Link>
    </nav>
  );
};
