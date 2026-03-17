import "./Hero.css";
import img from "./images.jpeg"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">

          <div className="hero-content">
            <h1>
              Hi, I'm <span>Your Name</span> 👋
            </h1>

            <h2>Frontend Developer</h2>

            <p>
              I build modern, responsive and user-friendly websites using React.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn primary">Hire Me</a>
              <a href="#" className="btn secondary">Download CV</a>
            </div>
          </div>

          <div className="hero-img">
            <img src={img} alt="hero" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;