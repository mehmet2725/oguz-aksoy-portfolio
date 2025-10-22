import React from "react";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" className="section contact-section">
      <h2 className="section-title">İletişim</h2>
      <p className="section-sub">Projelerim veya işbirliği için bana ulaşabilirsin.</p>

      <div className="contact-grid">
        <div className="contact-card" data-aos="fade-right">
          <h4>Email</h4>
          <a href="mailto:oguzaksoy.dev@gmail.com">oguzaksoy.dev@gmail.com</a>
        </div>

        <div className="contact-card" data-aos="fade-left">
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/oguzaksoy</a>
        </div>

        <div className="contact-card" data-aos="fade-up">
          <h4>GitHub</h4>
          <a href="https://github.com" target="_blank" rel="noreferrer">github.com/oguzaksoy</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
