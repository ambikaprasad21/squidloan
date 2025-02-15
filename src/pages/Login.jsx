import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Container = styled.div`
  margin: 2rem 5rem;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  background-color: rgb(37, 37, 37, 0.5);
  position: relative;
  padding: 2rem 5rem 5rem 2rem;
`;

const SideImg = styled.div`
  margin-bottom: 5rem;
`;

const Soldier = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: 15rem;

  img {
    width: 28rem;
    opacity: 50%;
  }
`;

const Heading = styled.h1`
  color: #ff459b;
  display: flex;
  gap: 1rem;
`;

const Kyc = styled.div`
  color: #00ecff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: 0 auto;
  gap: 4rem;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  color: #00ecff;
  span {
    color: red;
  }
`;

const Input = styled.input`
  padding: 1rem 1.4rem;
  border: 1px solid #00ecff;
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  &:focus {
    outline: none;
    border-color: #ff459b;
  }
`;

const MoInput = styled.input`
  padding: 1rem 1.4rem;
  border: 1px solid #00ecff;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  outline: none;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #ff459b;
  }
`;

const MoCode = styled.span`
  padding: 1.25rem 1.4rem;
  border-radius: 1rem 0 0 1rem;
  background-color: #ededed;
`;

const Mobile = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  display: flex;
  gap: 1rem;
`;

const TermsandCondition = styled.p`
  color: white;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 1rem 1.4rem;
  border-radius: 1rem;
  background-color: #00ecff;
  color: black;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
`;

const LoaderCenter = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const [pan, setPan] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleAgree = () => {
    setIsChecked(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCheckboxClick = () => {
    setShowModal(true);
  };

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/verify-otp");
    }, 5000);
    // navigate("/verify-otp");
  }

  if (isLoading)
    return (
      <LoaderCenter>
        <Loader />
      </LoaderCenter>
    );

  return (
    <Container>
      <SideImg>
        <img src="./images/logo-01.png" alt="squid game logo" />
      </SideImg>
      <Soldier>
        <img src="./images/sl-soldier-0.png" alt="" />
      </Soldier>
      <Form onSubmit={handleLogin}>
        <Heading>
          Journey <Kyc>Begins</Kyc>
        </Heading>
        <LabelInput>
          <Label htmlFor="">
            Pan Card<span>*</span>
          </Label>
          <Input
            type="text"
            placeholder="GHGPP3142B"
            required
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
        </LabelInput>
        <LabelInput>
          <Label htmlFor="">
            Phone number<span>*</span>
          </Label>
          <Mobile>
            <MoCode>+91</MoCode>
            <MoInput
              type="number"
              placeholder="7905194692"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Mobile>
        </LabelInput>
        <Checkbox>
          <input
            type="checkbox"
            required
            checked={isChecked}
            onChange={handleCheckboxClick}
          />
          <TermsandCondition>
            Accepting the terms & conditions
          </TermsandCondition>
        </Checkbox>
        <Button>
          <span>Next</span> <MdArrowForward />
        </Button>
      </Form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Player Consent</h3>
            <p>
              By agreeing to the terms and conditions, you consent to the
              processing of your data for verification purposes.
            </p>
            <ol style={{ padding: "0 2rem" }}>
              <li>
                Interest occurs on a daily basis and needs to be paid on date{" "}
                set out in the agreement.
              </li>
              <li>Actual interest rate charged to Borrower account may vary</li>
              <li>
                Borrower can pay the Repayment amount through National Automated
                Clearing House (NACH) or by settingup a Standing Instruction
                (SI) on Borrower's Bank Account
              </li>
              <li>
                Borrower need to pay the total Loan amount on the due date every
                month till the loan is fully repaid. Non repayment of Loan
                amount may lead to situations, including but not be limited to:
                <ul style={{ marginLeft: "2rem" }}>
                  <li>
                    Impact on other credit facilities availed from Squidloan
                  </li>
                  <li>
                    Impact on Borrower's credit score, rating and history
                    (reporting to Credit Information Comapanies CICs )
                  </li>
                  <li>
                    The institute may initiate appropriate recovery and legal
                    procedings against Borrower to recover the dues.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="modal-buttons">
              <button onClick={handleAgree}>I Agree</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Login;
