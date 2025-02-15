import Button from "../ui/Button";
import { styled } from "styled-components";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import AnimatedLogo from "./AnimatedLogo";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  /* background-color: #ccc; */
`;

function Header() {
  return (
    // <StyledHeader>
    //   {/* <img src="./images/logo3.png" alt="logo" /> */}
    //   <Logo />
    //   <Link to={"/login"} style={{ textDecoration: "none" }}>
    //     <Button variation="secondary" size="medium">
    //       Apply now
    //     </Button>
    //   </Link>
    // </StyledHeader>
    <div className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        <AnimatedLogo />
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
