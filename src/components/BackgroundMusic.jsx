import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const SoundContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 4rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BackgroundMusic() {
  const [soundStop, setSoundStop] = useState(false);
  return (
    <>
      <audio muted={soundStop} autoPlay loop>
        <source src="./sound/sg-song1.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <SoundContainer onClick={() => setSoundStop(!soundStop)}>
        {soundStop ? (
          <img
            src="./images/no-sound.png"
            alt="sound not playing"
            style={{ width: "4rem" }}
          />
        ) : (
          <img
            src="./images/on-sound.png"
            alt="sound playing"
            style={{ width: "4rem" }}
          />
        )}
      </SoundContainer>
    </>
  );
}

BackgroundMusic.propTypes = {
  stop: PropTypes.bool,
};

export default BackgroundMusic;
