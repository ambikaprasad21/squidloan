import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import LoanProgressSteps from "../components/LoanProgressSteps";
import styles from "./Disbursal.module.css";
import CountdownTimer from "../components/CountdownTimer";
import formatTime from "../utils/fomatTime";
import Congratulations from "../components/Congratulations";

function Disbursal() {
  const [aadhar, setAadhar] = useState("");
  const [askAadhar, setAskAadhar] = useState(false);
  const [askAdd, setAskAdd] = useState(true);
  const [addresses, setAddresses] = useState([
    "Narayni aashram new boys hostel",
  ]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [currentStep, setCurrentStep] = useState(2);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);

  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isHovered, setIsHovered] = useState(false);

  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showOtp) {
      if (timer > 0) {
        const countdown = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(countdown);
      }
    }
  }, [timer, showOtp]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  function handleNextStep() {}

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setSelectedAddress(newAddress);
      setNewAddress("");
    }
    setIsAdding(false);
  };

  function handleAddNext() {
    setAskAadhar(true);
    setAskAdd(false);
    setCurrentStep(3);
  }

  function handleKYC(e) {
    e.preventDefault();

    if (aadhar.length !== 14) {
      alert("Please enter a valid 12-digit Aadhar number.");
      return;
    }
    setAskAadhar(false);
    setShowOtp(true);
    setCurrentStep(4);
  }

  function handleAadharChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 12);

    let formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1-");
    setAadhar(formattedValue);
  }

  const handleOtpVerification = async () => {
    // Simulate API call
    const isValidOtp = otp.join("") === "123456"; // Replace with API response
    if (isValidOtp) {
      setIsVerified(true);
      setCurrentStep(5);
      setShowModal(true);
      // Show modal after successful verification
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = "/";
  };

  function handleResendOTP() {}

  return (
    <div className={styles.container}>
      <div className={styles.pro_form}>
        <LoanProgressSteps currentStep={currentStep} />
        {askAdd && (
          <div className={styles.add_kyc}>
            <h1>Address based KYC</h1>
            <div className={styles.all_add}>
              {addresses.map((address, index) => (
                <div key={index} className={styles.sel_add}>
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === address}
                    onChange={() => setSelectedAddress(address)}
                  />
                  <address>{address}</address>
                </div>
              ))}

              {isAdding && (
                <div className={styles.i_l}>
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Enter new address"
                    required
                  />
                </div>
              )}

              <button
                onClick={() =>
                  isAdding ? handleAddAddress() : setIsAdding(true)
                }
                className={styles.btn}
              >
                {isAdding ? "Save Address" : "Add New Address"}
              </button>
            </div>
            <button className={styles.btn} onClick={handleAddNext}>
              Next
            </button>
          </div>
        )}

        {askAadhar && (
          <div className={styles.form}>
            <h1>Aadhar KYC</h1>
            <form onSubmit={handleKYC}>
              <div className={styles.i_l}>
                <label htmlFor="">
                  Enter aadhar <span>*</span>
                </label>
                <input
                  type="text"
                  required
                  id="aadhar"
                  value={aadhar}
                  onChange={handleAadharChange}
                  maxLength="14"
                  placeholder="XXXX-XXXX-XXXX"
                />
              </div>
              <div className={styles.i_l}>
                <label htmlFor="">
                  Mail Id <span>*</span>
                </label>
                <input type="email" required placeholder="johndoe@gmail.com" />
              </div>
              <button className={styles.btn}>Submit</button>
            </form>
          </div>
        )}
        {showOtp && (
          <div className={styles.otpSection}>
            <h1>Enter OTP</h1>
            <p className={styles.otpText}>
              A 6-digit OTP has been sent to your registered mobile number.
            </p>
            <div className={styles.input_otp}>
              <div className={styles["otp-input-container"]}>
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className={styles["otp-input"]}
                  />
                ))}
              </div>
              <div className={styles.r_t}>
                <p onClick={handleResendOTP}>Resend OTP</p>
                <div className={styles.timer}>
                  <p>{formatTime(timer)}</p>
                </div>
              </div>
            </div>
            <button className={styles.btn} onClick={handleOtpVerification}>
              Verify OTP
            </button>
          </div>
        )}
        {isVerified && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}

        {/* Modal */}
        <Congratulations isOpen={showModal} onClose={handleCloseModal} />
      </div>
      <div className="w-[50rem] pt-[5rem]">
        <div className="rounded-[1rem] pt-[5rem] w-[100%] bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            {/* Circular gradient that follows mouse */}
            <div
              className="absolute bg-purple-500/10 rounded-full blur-3xl"
              style={{
                left: "calc(50% - 400px)",
                top: "calc(50% - 400px)",
                animation: "pulse 4s infinite",
              }}
            />

            {/* Floating particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatParticle ${
                    5 + Math.random() * 10
                  }s infinite linear`,
                  animationDelay: `-${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <div className="h-full flex flex-col items-center justify-center relative z-10">
            {/* Timer display */}
            <div>
              <div className="relative">
                {/* Glowing ring around timer */}
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />

                {/* Timer numbers */}
                <div className="text-7xl font-bold text-white tracking-wider relative">
                  {formatTime(timeLeft)}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Doll container with enhanced animations */}
            <div
              className="relative transition-all duration-500 ease-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Doll image placeholder */}
              <div
                className={`
            relative transform transition-all duration-700
            ${isHovered ? "scale-110" : "scale-100"} w-[20rem]
          `}
              >
                <img
                  src="./images/doll.png"
                  alt="Doll"
                  className="relative z-20 transition-all duration-500"
                />

                {/* Glowing aura behind doll */}
                <div
                  className={`
              absolute inset-0 bg-gradient-to-t from-purple-500/30 to-cyan-500/30 
              blur-2xl -z-10 transition-all duration-500
              ${isHovered ? "opacity-100 scale-110" : "opacity-50 scale-100"}
            `}
                />

                {/* Ground reflection */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-white/10 rounded-full blur-lg" />
              </div>

              {/* Animated rings around doll */}
              <div
                className={`
            absolute inset-0 border-2 border-cyan-500/30 rounded-full
            transition-all duration-700 animate-spin-slow
            ${isHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"}
          `}
              />
              <div
                className={`
            absolute inset-0 border-2 border-purple-500/30 rounded-full
            transition-all duration-700 animate-reverse-spin
            ${isHovered ? "scale-150 opacity-100" : "scale-100 opacity-0"}
          `}
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes floatParticle {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(20px, -20px);
              }
              100% {
                transform: translate(0, 0);
              }
            }
            @keyframes pulse {
              0%,
              100% {
                transform: scale(1);
                opacity: 0.5;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.7;
              }
            }
            .animate-spin-slow {
              animation: spin 8s linear infinite;
            }
            .animate-reverse-spin {
              animation: spin 10s linear infinite reverse;
            }
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default Disbursal;
