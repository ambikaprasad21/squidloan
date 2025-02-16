import Steps from "./Steps";

const CardSteps = () => {
  return (
    <div
      className="flex flex-col w-[1240px] h-[557px] rounded-lg border border-white/0 backdrop-blur-3xl mx-auto items-center justify-center gap-30"
      style={{ background: "linear-gradient(to right, #1F343B, #492F3F)" }}
    >
      <div className="text-center flex gap-3 mx-auto mt-10">
        <h1
          className="text-5xl font-medium font-['Poppins'] text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #00ECFF, #F65A9C 60%)",
          }}
        >
          Instant Loan in
        </h1>
        <h1 className="text-[#00ecff] text-5xl font-bold font-['Poppins']">
          5 Minutes
        </h1>
      </div>
      <Steps />
    </div>
  );
};

export default CardSteps;
