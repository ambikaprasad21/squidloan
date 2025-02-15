import styled, { css } from "styled-components";

const property = {
  col: css`
    flex-direction: column;
    gap: 4rem;
  `,
};

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${(props) => property[props.dir]}
`;

Row.defaultProps = {};

export default Row;
