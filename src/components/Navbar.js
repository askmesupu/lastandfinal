import React from "react";

export default function Navbar({ navigateWithHeart }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
      padding: "1rem",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "rgba(0,0,0,0.3)",
    }}>
      {[
        { name: "Home", path: "/" },
        { name: "My Love in English", path: "/english" },
        { name: "My Love in Bangla", path: "/bangla" },
        { name: "My Love in Hindi", path: "/hindi" },
        { name: "My Heart", path: "/myheart" }
      ].map((btn) => (
        <button
          key={btn.path}
          onClick={() => navigateWithHeart(btn.path)}
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.7)",
            color: "#333",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {btn.name}
        </button>
      ))}
    </nav>
  );
        }
