import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer" data-aos="fade-up">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Oğuz Aksoy — Tüm hakları saklıdır.</p>
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <span>•</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
