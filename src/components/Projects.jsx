// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Musicify", desc: "React demo" },
  { title: "ShopZone", desc: "E-ticaret demo" },
  { title: "Weatherly", desc: "API demo" },
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projeler</h2>
    <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} variants={{show:{transition:{staggerChildren:0.12}}}}>
      {projects.map((p, i) => (
        <motion.article key={p.title} className="project-card compact" variants={{hidden:{opacity:0, y:12}, show:{opacity:1,y:0}}} whileHover={{y:-6, scale:1.01}}>
          <div className="project-body">
            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default Projects;
