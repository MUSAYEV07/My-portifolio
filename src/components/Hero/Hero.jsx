import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import HeroImg from "./images.jpeg";
import "animate.css";

function Hero() {
  const texts = ["Frontend Developer", "React Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">

          <div className="hero-content animate__animated animate__fadeInUp">
            <h1>
              Hi, I'm <span>Musayev Otabek</span> 👋
            </h1>

            <h2 className="typing">{text}|</h2>

            <p>
              I build modern, responsive and user-friendly websites using React.
            </p>

            <div className="hero-buttons">
              <a href="#" className="sparkle-btn">
                Read More
                <span className="stars"></span>
              </a>
            </div>

            <div className="social-links">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="hero-img animate__animated animate__fadeInRight">
            <img src={HeroImg} alt="hero" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;