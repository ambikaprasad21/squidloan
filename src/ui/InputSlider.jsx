import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const StyledSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  outline: none;
  padding: 0;
  margin: 0;
  position: relative;

  /* Fix gradient calculation */
  background: linear-gradient(
    to right,
    #f65a9c
      ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
    rgba(209, 16, 98, 0.24)
      ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    background: url(${(props) => props.thumbImage}) center/contain no-repeat;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transform: translateY(-5px);
  }

  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    background: url(${(props) => props.thumbImage}) center/contain no-repeat;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transform: translateY(-5px);
  }
`;

const InputSlider = ({ min, max, input, onChange, thumbImage }) => {
  const sliderRef = useRef(null);

  return (
    <SliderContainer>
      <StyledSlider
        ref={sliderRef}
        min={min}
        max={max}
        value={input}
        onChange={onChange}
        thumbImage={thumbImage}
      />
    </SliderContainer>
  );
};

export default InputSlider;
