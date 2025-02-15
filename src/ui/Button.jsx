import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #3f8efc;
    background-color: #ffffff;
    border: 1.5px solid #3f8efc;
    box-sizing: border-box;

    &:hover {
      background-color: #f1f1f163;
    }
  `,
  secondary: css`
    color: #fff;
    background: #03615a;

    /* border: 1px solid var(--color-grey-200); */

    &:hover {
      background-color: #03534e;
    }
  `,
  danger: css`
    color: #fff;
    background-color: #f8202d;

    &:hover {
      background-color: #f60515;
    }
  `,
  marked: css`
    color: #fff;
    background-color: #6cf820;

    &:hover {
      background-color: #15f605;
    }
  `,
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: 1rem;
  align-items: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
