// Layout.jsx
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader"; // Loader komponent
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 soniya loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // Loader ko‘rinadi

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
    </>
  );
}