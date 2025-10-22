// ...existing code...
import React from "react";
import useTypewriter from "../hooks/useTypewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
// değiştirdim: assets/img içindeki gerçek dosyaya işaret et
import devImg from "../assets/img/lpo0-listing.jpg";

const particlesInit = async (main) => {
  try {
    await loadFull(main);
  } catch (err) {
    console.warn("tsparticles loadFull hatası:", err);
  }
};

const FALLBACK_SVG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="420" height="360"><rect fill="%236c63ff" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="24">Oğuz Aksoy</text></svg>';

const Hero = () => {
  const words = ["Frontend Developer", "UI Engineer", "React Lover"];
  const typed = useTypewriter(words, 70, 35, 1200);

  return (
    <section id="hero" className="hero section">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 28, density: { enable: true, area: 800 } },
            color: { value: "#6c63ff" },
            opacity: { value: 0.06 },
            size: { value: { min: 2, max: 5 } },
            links: { enable: true, distance: 120, color: "#6c63ff", opacity: 0.04 },
            move: { enable: true, speed: 0.7 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
            },
          },
        }}
        className="hero-particles"
      />

      <div className="hero-inner">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="eyebrow">Merhaba, ben</h4>

          <motion.h1
            className="hero-title"
            whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
          >
            Oğuz Aksoy
          </motion.h1>

          <div className="typewrap" aria-hidden>
            <span className="typeword">{typed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-lead">
            Kullanıcı odaklı, performans ve erişilebilirlik öncelikli web
            uygulamaları geliştiriyorum. React ile component tabanlı çözümler
            üretmeyi seviyorum.
          </p>

          <div className="hero-ctas">
            <a className="btn" href="#">CV İndir</a>
            <a className="btn outline" href="#projects">Projeler</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="device-mock">
            <img
              src={devImg}
              alt="Developer illustration"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_SVG;
              }}
            />
            <div className="glass-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
// ...existing code...