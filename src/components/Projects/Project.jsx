import React from "react";
import styles from "./Project.module.css";
import projectsData from "../data/projects.json"; // Correct import
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => (
           <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

