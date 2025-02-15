import styled from "styled-components";

const StyledBarDiv = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #e74c8a;
  clip-path: polygon(100% 0, 100% 35%, 23% 35%, 20% 65%, 0 65%, 0 0);
  margin-top: 5rem;
`;

function StyleBar() {
  return <StyledBarDiv />;
}

export default StyleBar;
