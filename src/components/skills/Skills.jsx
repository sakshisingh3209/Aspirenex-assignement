// src/components/skills/Skills.jsx

import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../data/skills.json"; // Adjusted import path
import { getImageUrl } from "../../utils";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.skillList}>
        {skillsData.map((skill, id) => (
          <li key={id} className={styles.skillItem}>
            <img
              src={getImageUrl(skill.imageSrc)}
              alt={skill.title}
              className={styles.skillImage}
            />
            <strong>{skill.title}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
