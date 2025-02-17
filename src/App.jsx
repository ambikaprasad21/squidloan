import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import BackgroundMusic from "./components/BackgroundMusic";
import LoanEligibility from "./pages/LoanEligibility";
import Disbursal from "./pages/Disbursal";
import { useState } from "react";
import StartingVideo from "./components/StartingVideo";
import Repayment from "./pages/Repayment";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [moveLogo, setMoveLogo] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  const handleVideoEnd = () => {
    setShowIntro(false);
    setMoveLogo(true);
  };

  return (
    <BrowserRouter>
      {showIntro ? (
        <StartingVideo onVideoEnd={handleVideoEnd} />
      ) : (
        <div>
          {/* Animated Logo Movement */}
          {!hideLogo && (
            <motion.img
              src="./images/logo-01.png"
              alt="Logo"
              className="logo"
              initial={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={
                moveLogo
                  ? {
                      top: "4.9rem",
                      left: "9.4rem",
                      width: "120px",
                      height: "auto",
                    }
                  : {}
              }
              transition={{ duration: 1 }}
              onAnimationComplete={() => setHideLogo(true)}
            />
          )}

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="verify-otp" element={<Otp />} />
              <Route path="loan-eligibility" element={<LoanEligibility />} />
              <Route path="disbursal" element={<Disbursal />} />
              <Route path="repayment" element={<Repayment />} />
            </Route>
          </Routes>
          <BackgroundMusic />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
