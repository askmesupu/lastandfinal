import React from "react";

export default function HeartBlast() {
  return (
    <div style={{
      position: "fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      background:"radial-gradient(circle at center, #ff6b81, #ff9a9e, #fad0c4, #c2e9fb)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex: 9999,
      animation: "pulse 1.5s ease-in-out",
    }}>
      <div style={{
        width: "200px",
        height: "200px",
        background: "rgba(255,255,255,0.8)",
        clipPath: "polygon(50% 0%, 61% 16%, 75% 16%, 82% 27%, 90% 38%, 75% 62%, 50% 100%, 25% 62%, 10% 38%, 18% 27%, 25% 16%, 39% 16%)",
        animation: "heartBeat 1.5s ease-in-out",
      }}></div>

      <style>
        {`
          @keyframes pulse {
            0% {opacity:0;}
            50% {opacity:1;}
            100% {opacity:0;}
          }
          @keyframes heartBeat {
            0% {transform: scale(0);}
            50% {transform: scale(1.2);}
            100% {transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
}
