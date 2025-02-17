import Calculator from "../components/Calculator";
import CardSteps from "../components/CardSteps";
import CibilFileUpload from "../components/CibilFileUpload";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Calculator />
      <CardSteps />
      <CibilFileUpload />
    </>
  );
}

export default Home;
