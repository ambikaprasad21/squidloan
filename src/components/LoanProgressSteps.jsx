import React, { useState, useEffect } from "react";
import { Check, Banknote, FileCheck, FilePen, CreditCard } from "lucide-react";

const LoanProgressSteps = ({ currentStep }) => {
  const steps = [
    {
      id: 1,
      title: "Eligibility Check",
      icon: <Check className="w-10 h-10" />,
    },
    { id: 2, title: "Loan Approved", icon: <Banknote className="w-10 h-10" /> },
    { id: 3, title: "KYC", icon: <FileCheck className="w-10 h-10" /> },
    { id: 4, title: "E-Sign", icon: <FilePen className="w-10 h-10" /> },
    { id: 5, title: "Disbursal", icon: <CreditCard className="w-10 h-10" /> },
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentStep((prev) => (prev < 5 ? prev + 1 : 1));
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-12 py-8">
      <div className="relative flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center flex-1"
          >
            {index < steps.length - 1 && (
              <div className="absolute w-full h-1 top-10 left-1/2">
                <div
                  className={`h-full transition-colors duration-300 ${
                    step.id < currentStep ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              </div>
            )}

            <div className="relative z-10">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.id <= currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.icon}
              </div>

              {step.id === currentStep && (
                <div className="absolute inset-0 -m-1">
                  <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping" />
                </div>
              )}
            </div>

            <p
              className={`mt-2 text-[12px] font-medium transition-colors duration-300 ${
                step.id <= currentStep ? "text-green-500" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanProgressSteps;
