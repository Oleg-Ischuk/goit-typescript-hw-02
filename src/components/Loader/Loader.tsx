import type React from "react";

const Loader: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "rotate 2s linear infinite" }}
      >
        <style>{`
          @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes dash {
            0% {
              stroke-dasharray: 1, 150;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -35;
            }
            100% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -124;
            }
          }
        `}</style>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="grey"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ animation: "dash 1.5s ease-in-out infinite" }}
        />
      </svg>
    </div>
  );
};

export default Loader;
