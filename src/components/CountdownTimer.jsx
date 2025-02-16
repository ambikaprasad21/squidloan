import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(7 * 60);

  const digitPatterns = {
    0: ["11111", "10001", "10001", "10001", "10001", "10001", "11111"],
    1: ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
    2: ["11111", "00001", "00001", "11111", "10000", "10000", "11111"],
    3: ["11111", "00001", "00001", "11111", "00001", "00001", "11111"],
    4: ["10001", "10001", "10001", "11111", "00001", "00001", "00001"],
    5: ["11111", "10000", "10000", "11111", "00001", "00001", "11111"],
    6: ["11111", "10000", "10000", "11111", "10001", "10001", "11111"],
    7: ["11111", "00001", "00001", "00001", "00001", "00001", "00001"],
    8: ["11111", "10001", "10001", "11111", "10001", "10001", "11111"],
    9: ["11111", "10001", "10001", "11111", "00001", "00001", "11111"],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const renderDot = (active) => (
    <div
      className={`w-2 h-2 rounded-full ${
        active ? "bg-red-500 opacity-100 shadow-lg" : "bg-gray-700 opacity-30"
      }`}
    />
  );

  const renderDigit = (digit) => {
    const pattern = digitPatterns[digit] || digitPatterns["0"];
    return (
      <div className="grid grid-rows-7 gap-1 mx-2">
        {pattern.map((row, i) => (
          <div key={i} className="grid grid-cols-5 gap-1">
            {row.split("").map((dot, j) => (
              <div key={j}>{renderDot(dot === "1")}</div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 rounded-lg shadow-lg">
      <div className="relative bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 p-1 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-pulse" />

        <div className="relative bg-gray-900 p-8 rounded-lg shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-lg -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/40 rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg" />

          {/* Timer Digits */}
          <div className="flex items-center justify-center space-x-4 relative">
            {formatTime(timeLeft)
              .split("")
              .map((digit, index) => (
                <React.Fragment key={index}>
                  {renderDigit(digit)}
                  {index === 1 && (
                    <div className="flex flex-col justify-center space-y-3 mx-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg" />
                      <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg" />
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
