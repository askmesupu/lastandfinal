// src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="home-title">
        <h1 id="home-title">Supto ❤️ Shiropa</h1>

        <p>
          In 2023, Supto first fell in love with Shiropa at first sight. He prayed
          to God to make her his. After Durga Puja on 20 October 2024, their
          relationship officially started. Since then, their love grows day by
          day — simple, true and beautiful.
        </p>

        <div className="circle-row" aria-hidden="false">
          <div className="circle-frame">
            <img
              loading="lazy"
              src="https://i.imgur.com/8sdznQ1.jpeg"
              alt="Shiropa (Bubu)"
              width="140"
              height="140"
            />
          </div>
          <div className="circle-frame">
            <img
              loading="lazy"
              src="https://i.imgur.com/OGgciNc.png"
              alt="Supto (Dudu)"
              width="140"
              height="140"
            />
          </div>
        </div>
      </section>
    </main>
  );
    }
