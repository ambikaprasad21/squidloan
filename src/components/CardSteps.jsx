import Steps from "./Steps";

const CardSteps = () => {
  return (
    <div className="flex flex-col items-center gap-15 justify-center py-[20rem] rounded-[1rem] border border-white/0 bg-gradient-to-r from-[#1F343B] to-[#492F3F]">
      <div className="text-center flex gap-3 mx-auto mt-10">
        <h1 className="text-5xl font-medium font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-[#00ECFF] to-[#F65A9C]">
          Instant Loan in
        </h1>
        <h1 className="text-[#00ecff] text-5xl font-bold font-['Poppins']">
          5 Minutes
        </h1>
      </div>
      <Steps />s
    </div>
  );
};

export default CardSteps;
