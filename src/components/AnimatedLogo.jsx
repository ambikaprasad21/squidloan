function AnimatedLogo() {
  return (
    <div className="relative w-110 flex items-center justify-center">
      <style>{`
      @keyframes moveCircle {
        0% {
          transform: translate(0, 0) scale(0.6);
          opacity: 0;
        }
        5% {
          opacity: 1;
        }
        25% {
          transform: translate(-120px, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(-120px, 0) scale(1);
          opacity: 1;
        }
      }

      @keyframes moveTriangle {
        0% {
          transform: translate(0, 0) scale(0.6);
          opacity: 0;
        }
        25% {
          transform: translate(0, 0) scale(0.6);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        50% {
          transform: translate(-60px, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(-60px, 0) scale(1);
          opacity: 1;
        }
      }

      @keyframes moveSquare {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      .animate-circle {
        animation: moveCircle 5s ease-in-out infinite;
      }

      .animate-triangle {
        animation: moveTriangle 5s ease-in-out infinite;
      }

      .animate-square {
        animation: moveSquare 5s ease-in-out infinite;
      }
    `}</style>

      <img
        src="./images/circle.png"
        alt="Circle"
        className="absolute w-16 animate-circle"
      />

      <img
        src="./images/triangle.png"
        alt="Triangle"
        className="absolute w-16  animate-triangle"
      />

      <img
        src="./images/square.png"
        alt="Square"
        className="absolute w-16  animate-square"
      />
    </div>
  );
}

export default AnimatedLogo;
