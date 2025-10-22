// ...existing code...
import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/img/lpo0-listing.jpg";

const PROFILE_FALLBACK =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect fill="%236c63ff" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="20">Oğuz</text></svg>';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-inner small-gap">
        <div className="about-text">
          <h2 className="section-title">Hakkımda</h2>
          <p>
            Ben <strong>Oğuz Aksoy</strong>. Basit, hızlı ve erişilebilir arayüzler
            inşa ediyorum. Projelerimde kullanıcı deneyimi ve performans önceliğim.
          </p>
          <div className="about-ctas compact">
            <a href="#contact" className="btn small">İletişime Geç</a>
            <a href="#projects" className="btn outline small">Projeler</a>
          </div>
        </div>

        <div className="about-image">
          <img
            src={profileImg}
            alt="Oğuz Aksoy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PROFILE_FALLBACK;
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
// ...existing code...