import { useState } from "react";
import styles from "./Footer.module.css";
import {
  BsTwitterX,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="./images/logo-01.png" alt="logo" />
      </div>
      <div className={styles.f_c}>
        <h2>About Us</h2>
        <div className={styles.item_list}>
          <p>Loan Products</p>
          <p>Interest Rates</p>
          <p>FAQs</p>
          <p>Laon Calculator</p>
        </div>
      </div>
      <div className={styles.f_c}>
        <h2>Loan Processor</h2>
        <div className={styles.item_list}>
          <p>Loan Products</p>
          <p>Interest Rates</p>
          <p>FAQs</p>
          <p>Laon Calculator</p>
        </div>
      </div>
      <div className={styles.f_c}>
        <h2>Contact Us</h2>
        <div className={styles.item_list}>
          <p>Email: Squidloan@gmail.com</p>
          <p>Phone: +91 XXXXXXXXX</p>
          <p>Social Media</p>
          <div className={styles.social}>
            <BsTwitterX />
            <BsLinkedin />
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>
      <div
        className="relative perspective-1000 w-64 h-96 group"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .soldier-wrapper {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }

        .soldier-shadow {
          background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, transparent 70%);
          transform: translateZ(-20px) rotateX(90deg);
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateZ(0);
          }
          50% {
            transform: translateY(-10px) translateZ(20px);
          }
          100% {
            transform: translateY(0px) translateZ(0);
          }
        }

        .hover-float {
          animation: float 3s ease-in-out infinite;
        }

        .soldier-glow {
          background: radial-gradient(circle at center, rgba(255,0,128,0.1) 0%, transparent 70%);
          filter: blur(10px);
        }
      `}</style>

        <div
          className="soldier-wrapper absolute inset-0 hover-float"
          style={{
            transform: `
            rotateY(${mousePosition.x * 20}deg) 
            rotateX(${-mousePosition.y * 20}deg)
          `,
          }}
        >
          {/* Shadow under the soldier */}
          <div className="soldier-shadow absolute bottom-0 left-1/2 w-32 h-8 -ml-16" />

          {/* Pink glow effect */}
          <div className="soldier-glow absolute inset-0" />

          {/* The soldier image */}
          <img
            src="./images/stand-soldier.png"
            alt="Squid Game Soldier"
            className="w-full h-full object-contain transform-gpu"
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
