import React from "react";

export default function Home() {
  return (
    <main style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      minHeight:"100vh",
      padding:"2rem",
      background:"linear-gradient(120deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb)",
      backgroundSize:"400% 400%",
      animation: "gradientBG 20s ease infinite"
    }}>
      <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"white", marginBottom:"1rem"}}>Supto ❤️ Shiropa</h1>
      <p style={{color:"white", fontSize:"1.2rem", maxWidth:"600px", lineHeight:"1.6"}}>
        In 2023, Supto first fell in love with Shiropa at first sight. He prayed to God to make her his. After Durga Puja on 20 October 2024, their relationship officially started. Since then, their love grows day by day — simple, true and beautiful.
      </p>
      <div style={{display:"flex", justifyContent:"center", gap:"1rem", marginTop:"2rem"}}>
        <img
          src="https://i.imgur.com/8sdznQ1.jpeg"
          alt="Shiropa (Bubu)"
          style={{width:"140px", height:"140px", borderRadius:"50%", objectFit:"cover", border:"4px solid white"}}
        />
        <img
          src="https://i.imgur.com/OGgciNc.png"
          alt="Supto (Dudu)"
          style={{width:"140px", height:"140px", borderRadius:"50%", objectFit:"cover", border:"4px solid white"}}
        />
      </div>

      <style>
        {`
          @keyframes gradientBG {
            0%{background-position:0% 50%;}
            50%{background-position:100% 50%;}
            100%{background-position:0% 50%;}
          }
        `}
      </style>
    </main>
  );
  }
