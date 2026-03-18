import React, { useEffect, useState } from "react";
import "./Hero.css";
import HeroImg from './images.jpeg'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

function Hero() {

  const texts = ["Frontend Developer", "React Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    }
  }, [charIndex, index]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">

          <div className="hero-content fade-in">
            <h1>
              Hi, I'm <span>Musayev Otabek</span> 👋
            </h1>

            <h2 className="typing">{text}|</h2>

            <p>
              I build modern, responsive and user-friendly websites using React.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn primary">Read More</a>
            </div>
          </div>

          <div className="hero-img fade-in">
            <img 
              src={HeroImg}
              alt="hero"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;