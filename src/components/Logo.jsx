import { styled } from "styled-components";

const StyledLogo = styled.div`
  width: 10rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="./images/logo3.png" alt="logo" style={{ width: "100%" }} />
    </StyledLogo>
  );
}

export default Logo;
