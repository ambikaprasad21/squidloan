import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import BackgroundMusic from "./components/BackgroundMusic";
import LoanEligibility from "./pages/LoanEligibility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-otp" element={<Otp />} />
          <Route path="loan-eligibility" element={<LoanEligibility />} />
        </Route>
      </Routes>

      <BackgroundMusic />
    </BrowserRouter>
  );
}

export default App;
