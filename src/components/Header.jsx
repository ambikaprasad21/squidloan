import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import AnimatedLogo from "./AnimatedLogo";

function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        {/* <AnimatedLogo /> */}
        <img src="./images/logo-01.png" alt="logo" />
      </Link>
      <div className={styles.links}>
        <NavLink>About us</NavLink>
        <NavLink>Contact us</NavLink>
        <NavLink className={styles.btn} to={"/login"}>
          Repayment
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
