import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import styles from "../assets/styles/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink
        to="/"
        className={styles["wrapper__link"]}
        activeClassName={styles["wrapper__link--active"]}
        exact
      >
        <HomeIcon className={styles["wrapper__link__icon"]} />
        <span className={styles["wrapper__link__text"]}>Home</span>
      </NavLink>
      <NavLink
        to="/daily"
        className={styles["wrapper__link"]}
        activeClassName={styles["wrapper__link--active"]}
      >
        <span className={styles["wrapper__link__text"]}>Daily</span>
        <CalendarIcon className={styles["wrapper__link__icon"]} />
      </NavLink>
    </nav>
  );
};
