import React, { useEffect, useState } from "react";

const NAV_ITEMS = ["hero", "about", "skills", "projects", "contact"];

const Navbar = ({ toggleTheme, theme }) => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((s) => {
        const top = s.getBoundingClientRect().top;
        if (top <= 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    const nav = document.querySelector(".navbar");
    const navHeight = nav ? nav.offsetHeight : 80;
    if (target) {
      // compute exact top minus navbar height and a little gap
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "nav-shadow" : ""}`}>
      <button className="logo" onClick={scrollToTop} aria-label="Ana sayfa">
        Oğuz Aksoy
      </button>

      <ul className="nav-links">
        {NAV_ITEMS.map((id) => (
          <li key={id}>
            <button
              className={`nav-btn ${active === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              {id === "hero" ? "Anasayfa" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
