import styled, { css } from "styled-components";
import { PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { MdArrowForward } from "react-icons/md";
import Row from "./../ui/Row";
import InputSlider from "../ui/InputSlider";

const Section = styled.div`
  margin: 15rem 0;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  gap: 0.5rem;
  padding: 1rem;
`;

const Highlight = styled.span`
  background-color: #00695c;
  color: white;
  padding: 0.2rem 1rem;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 10rem;
  position: relative;
`;

const Calci = styled.div`
  position: absolute;
  top: -6rem;
  left: 18rem;

  img {
    width: 15rem;
  }
`;

const Card = styled.div`
  padding: 6rem 3rem 3rem 3rem;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  color: white;
  position: relative;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  div {
    flex-grow: 1;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  p:first-child {
    font-size: 1.5rem;
  }

  p:last-child {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  color: white;
`;

const ResultCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  strong {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: var(--primary-color);
    font-size: 2rem;
  }
`;

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ChartData = styled.div`
  display: flex;
  align-items: center;
  /* gap: 3rem; */

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const boxColors = {
  green: css`
    background-color: #4dd3c8;
  `,
  pink: css`
    background-color: #f65a9c;
  `,
  yellow: css`
    background-color: #ffde05;
  `,
};

const Rect = styled.span`
  width: 2rem;
  height: 2rem;
  ${(props) => boxColors[props.color]}
`;

const ChartAmount = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const TotalAmount = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 40%;
  left: 65%;
`;

const StyButton = styled.button`
  display: flex;
  align-content: center;
  gap: 2rem;
  font-size: 2rem;
  padding: 1rem 1.6rem;
  position: absolute;
  bottom: 0;
  left: 45%;

  background-color: var(--blue-color);
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const dataColors = ["#f65a9c", "#4dd3c8", "#ffde05"];

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(80000);
  const [interestRate, setInterestRate] = useState(18);
  const [loanTenure, setLoanTenure] = useState(4);
  const [totalLoanCost, setTotalLoanCost] = useState(0);
  // const [payableAmount, setPayableAmount] = useState(100);

  const monthlyInterest = interestRate / 100 / 12;
  const EMI =
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTenure)) /
    (Math.pow(1 + monthlyInterest, loanTenure) - 1);

  const totalInterest = parseInt(EMI * loanTenure - loanAmount, 10);
  // const totalLoanCost = parseInt(loanAmount + totalInterest, 10);
  useEffect(() => {
    setTotalLoanCost(parseInt(loanAmount + totalInterest, 10));
  }, [loanAmount, totalInterest]);

  const pieData = [
    { name: "Interest", value: totalInterest },
    { name: "Principal", value: loanAmount },
    { name: "totalLoanCost", value: totalLoanCost },
  ];

  return (
    <Section>
      <Banner>
        The more you play better <Highlight>the eligibility</Highlight>
      </Banner>
      <Container>
        <Card>
          <CardContent>
            <div>
              <SliderContainer>
                <Label>
                  <p>Loan Amount (₹)</p>
                  <p>₹ {loanAmount.toLocaleString()}</p>
                </Label>
                <InputSlider
                  min={0}
                  max={100000}
                  input={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  thumbImage={"./images/input-mask01.png"}
                />
              </SliderContainer>
              <SliderContainer>
                <Label>
                  <p>Interest Rate (% per annum)</p>
                  <p>{interestRate} %</p>
                </Label>
                <InputSlider
                  min={5}
                  max={30}
                  input={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  thumbImage={"./images/input-mask02.png"}
                />
              </SliderContainer>
              <SliderContainer>
                <Label>
                  <p>Loan Tenure (Months)</p>
                  <p>{loanTenure} months</p>
                </Label>
                <InputSlider
                  min={1}
                  max={12}
                  input={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  thumbImage={"./images/input-mask03.png"}
                />
              </SliderContainer>
            </div>
            <ChartLegend>
              <ChartAmount>
                <PieChart width={400} height={300}>
                  <Pie
                    data={pieData}
                    cx="80%"
                    cy="40%"
                    outerRadius={80}
                    innerRadius={50}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={dataColors[index]} />
                    ))}
                  </Pie>
                </PieChart>
                <TotalAmount>₹ {totalLoanCost}</TotalAmount>
              </ChartAmount>

              <ChartInfo>
                <ChartData>
                  <div>
                    <Rect color="green"></Rect>
                    <p>Loan Amount</p>
                  </div>

                  <p>₹ {loanAmount}</p>
                </ChartData>
                <ChartData>
                  <div>
                    <Rect color="pink"></Rect>
                    <p>Total Interest</p>
                  </div>

                  <p>₹ {totalInterest}</p>
                </ChartData>
                <ChartData>
                  <div>
                    <Rect color="yellow"></Rect>
                    <p>Payable Amount</p>
                  </div>

                  <p>₹ {totalLoanCost}</p>
                </ChartData>
              </ChartInfo>
            </ChartLegend>
          </CardContent>
        </Card>
        <Calci>
          <img src="./images/calci.png" alt="calculator" />
        </Calci>
        <StyButton>
          <span>Ready to play</span> <MdArrowForward />
        </StyButton>
      </Container>
    </Section>
  );
}

export default Calculator;
