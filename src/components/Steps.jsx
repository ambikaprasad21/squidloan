import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "Eligibility Check",
    description:
      "Our smart system verifies your details and calculates the best loan amount for you in real time.",
    icon: "./images/check.png",
  },
  {
    title: "KYC",
    description:
      "Using Aadhaar-based KYC, we verify your identity instantly—no need to visit a branch.",
    icon: "./images/KYC.png",
  },
  {
    title: "eSign & Dispersal",
    description:
      "Provide basic details like PAN, Aadhaar, and income information.",
    icon: "./images/digital-signature.png",
  },
];

const GradientCard = ({ title, description, icon }) => {
  return (
    <div className="relative w-72 h-72 p-6 text-white">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 294 296"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(275 -26.1733) rotate(137.27) scale(586.749 587.07)"
          >
            <stop stopColor="#FF2481" />
            <stop offset="1" stopColor="#00ECFF" />
          </radialGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M15 0C6.7 0 0 6.7 0 15V281C0 289.2 6.7 296 15 296H198C205.1 296 209.2 287.1 206.6 280.6C204.3 274.8 203 268.4 203 261.7C203 233.9 225.4 211.4 253 211.4C260.8 211.4 268.2 213.2 274.8 216.4C281.9 219.9 294 215.2 294 207.4V15C294 6.7 287.3 0 279 0H15Z"
        />
      </svg>
      <div className="relative flex flex-col gap-2 z-10">
        <img src={icon} className="w-1/5 h-1/5" />
        <h2 className="text-xl font-semibold mt-10">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>

      <div className="absolute flex items-center justify-center bottom-[-8px] right-[-1px]  w-20 h-20 bg-cyan-500  rounded-full shadow-md cursor-pointer">
        <div className="w-20 h-20 left-0 top-0 absolute opacity-0 md:opacity-100 hover:bg-[#7d4cd0] rounded-[18.65px] blur-[27.97px]"></div>
        <FaArrowRight className="text-lg text-white w-[32px] h-[22px]" />
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 mt-20">
      {cards.map((card, index) => (
        <GradientCard
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default Steps;
