import Calculator from "../components/Calculator";
import CardSteps from "../components/CardSteps";
import CibilFileUpload from "../components/CibilFileUpload";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Calculator />
      <div className="flex justify-center">
        <CardSteps />
      </div>
      <CibilFileUpload />
    </div>
  );
}

export default Home;
