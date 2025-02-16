import styled from "styled-components";
import Row from "../ui/Row";
import { useState } from "react";
import BackgroundMusic from "./BackgroundMusic";
import StyleBar from "../ui/StyleBar";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  height: 100dvh;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Timer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

const Para = styled.p`
  font-size: 3rem;
  letter-spacing: 3px;
`;

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      ::-webkit-scrollbar {
        display: none;
      }
      html {
        scrollbar-width: none;
      }
      body {
        -ms-overflow-style: none;
      }
    `}</style>
      <div className="w-72 h-72 bg-cyan-400/40 rounded-full blur-3xl absolute " />
      <div className="w-72 h-72 bg-cyan-400/40 rounded-full blur-3xl absolute items-center mr-10" />
      <img
        className="w-full h-screen absolute top-0 left-1/2 transform -translate-x-1/2 opacity-50"
        src="./images/HeroBG.png"
        alt="hero"
      />

      {/* <div className="w-full h-[50px] bg-cyan-400/70 rounded-full blur-3xl absolute right-2" />
     
      <div className="w-full h-[50px] bg-cyan-400/70 rounded-full blur-3xl absolute right-2" /> */}
      <div className="w-full">
        <div className="flex gap-2 justify-around items-center lg:flex-row ">
          <div className="flex flex-col gap-5  pl-18">
            <div className="flex gap-5 relative items-baseline">
              <div className="text-[#f65a9c] text-[75px] font-normal font-['Rikos'] uppercase [text-shadow:_0px_0px_10px_rgb(255_28_131_/_0.20)]">
                SQUID
              </div>
              <div className="flex">
                <div className="text-white text-[75px] font-normal font-['Rikos'] uppercase [text-shadow:_0px_0px_10px_rgb(255_28_131_/_0.20)]">
                  L
                </div>
                <div className="text-[#f65a9c] text-[75px] font-normal font-['Rikos']  uppercase [text-shadow:_0px_0px_10px_rgb(255_28_131_/_0.20)]">
                  O
                </div>
                <div className="text-white text-[75px] font-normal font-['Rikos'] uppercase [text-shadow:_0px_0px_10px_rgb(255_28_131_/_0.20)]">
                  AN
                </div>
              </div>
              <div>
                <span className="text-white text-[29.17px] font-semibold ">
                  v
                </span>
                <span className="text-[#ea6fa4] text-[29.17px] font-semibold ">
                  0.1
                </span>
              </div>
            </div>
            <div className="text-white text-[5rem] font-semibold tracking-wide relative">
              Survive the month, secure your <br />
              <div className="text-[#00ecff]">loan in just 5 minutes!</div>
            </div>
            <div className="relative mt-10" onClick={() => navigate("/login")}>
              <div className="w-[275.99px] h-[65.27px] left-0 top-0 absolute opacity-0 md:opacity-100 bg-gradient-to-b from-[#f98cc4] to-[#7d4cd0] rounded-[18.65px] blur-[27.97px]"></div>

              {/* Button */}
              <div className="w-[264.80px] px-[29.84px] py-[18.65px] left-[5.59px] top-[0.49px] absolute bg-black rounded-[18.65px] border-2 border-[#7d4cd0] justify-center items-center gap-[18.65px] inline-flex hover:shadow-[10px_-5px_50px_-5px] hover:shadow-blue-300">
                <div className="text-white text-[22.38px]  mt-5 cursor-pointer">
                  Let’s begin
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto  relative overflow-hidden mr-10">
            <img className="w-full" src="./images/People1.png" />
            {/* <BackgroundMusic /> */}
            {/* <img className="w-[470px] h-[470px] left-[-14px] top-[20px] " src="./images/People1.png" /> */}
          </div>
        </div>

        <div data-svg-wrapper>
          <svg className="w-full" viewBox="150 15 1470 104">
            <g filter="url(#filter0_f_58_1045)">
              <path
                d="M647.5 0.5L8590 2V55.76H667.161L592.30 90.5H1V43.4156H592.37L647.5 10.5Z"
                fill="#FF459B"
              />
            </g>
          </svg>
        </div>

        <div className="w-72 h-72 bg-cyan-400/40 rounded-full blur-3xl absolute" />
      </div>
    </>
  );
}

export default Hero;
