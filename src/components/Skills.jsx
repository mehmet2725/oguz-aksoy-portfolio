// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "JavaScript", "HTML/CSS", "Git"];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Yetenekler</h2>
    <motion.div className="skills-row" variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}}>
      {skills.map((s,i) => (
        <motion.div className="skill-pill" key={s} variants={item} whileHover={{scale:1.04}}>
          {s}
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
