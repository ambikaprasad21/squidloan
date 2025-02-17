import { useEffect, useRef, useState } from "react";
import styles from "./Otp.module.css";
import { useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  function handleResendOTP() {}

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes} : ${secs}`;
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input box
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  function handleOtp(e) {
    e.preventDefault();
    navigate("/loan-eligibility");
    // otp verification
  }

  return (
    <div className={styles.container}>
      <div className={styles.side_img}>
        <img src="./images/logo-01.png" alt="squid game logo" />
      </div>
      <div className={styles.soldier}>
        <img src="./images/sl-soldier-0.png" alt="" />
      </div>
      <form onSubmit={handleOtp} className={styles.form}>
        <h1 className={styles.heading}>
          Enter the 6-digit OTP sent to your mobile number
        </h1>
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
        <button className={styles.btn}>Verify</button>
      </form>
    </div>
  );
}

export default Otp;
