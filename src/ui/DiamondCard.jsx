import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  background: #ff4081;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transform: rotate(45deg);
`;

const Content = styled.div`
  transform: rotate(-45deg);
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: white;
`;

const DiamondCard = () => {
  return (
    <CardContainer>
      <Content>
        <Image src="./images/lets-start.png" alt="lets start" />
        <Title>Let’s start</Title>
        <Description>
          Provide basic details like PAN, Aadhaar, and income information.
        </Description>
      </Content>
    </CardContainer>
  );
};

export default DiamondCard;
