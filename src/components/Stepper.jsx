import styled from "styled-components";

const StepsCont = styled.div`
  display: flex;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  /* letter-spacing: 2px; */

  img {
    width: 5rem;
  }
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  border-top: 2px dashed white;
  transform: translateY(2.5rem);
`;

const Stepper = () => {
  return (
    <StepsCont>
      <Step>
        <img src="./images/personal-data.png" alt="let's start the process" />
        <p>Let's start</p>
      </Step>
      <Line />
      <Step>
        <img src="./images/cust-kyc.png" alt="kyc step" />
        <p>KYC</p>
      </Step>
      <Line />
      <Step>
        <img src="./images/inst-disbursal.png" alt="immediate loan disbursal" />
        <p>Disbursal</p>
      </Step>
    </StepsCont>
  );
};

export default Stepper;
