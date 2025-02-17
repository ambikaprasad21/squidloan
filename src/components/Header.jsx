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
        <NavLink>
          <span>A</span>bout us
        </NavLink>
        <NavLink>
          <span>C</span>ontact us
        </NavLink>
        <NavLink className={styles.btn} to={"/repayment"}>
          Repayment
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
