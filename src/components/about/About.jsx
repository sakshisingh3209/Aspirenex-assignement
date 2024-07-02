import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <ul>
                <li>
                  Expert in crafting user-friendly and visually appealing web
                  interfaces
                </li>
                <li>
                  Proficient in HTML, CSS, JavaScript, and modern framework
                  React{" "}
                </li>
                <li>
                  Passionate about creating seamless user experiences and
                  responsive designs
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <ul>
                <li>Passionate about backend development and eager to learn</li>
                <li>
                  Familiar with backend frameworks and technologies such as
                  Node.js, Express.js
                </li>
                <li>
                  Basic understanding of database management systems like SQL or
                  NoSQL
                </li>
                <li>
                  Strong problem-solving skills and a proactive approach to
                  tackling challenges
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Problem Solving</h3>
              <ul>
                <li>
                  Passionate about solving complex problems and finding
                  innovative solutions
                </li>
                <li>
                  Strong analytical skills with a methodical approach to
                  problem-solving
                </li>
                <li>
                  Effective communicator, able to collaborate and brainstorm
                  ideas with teams
                </li>
                <li>
                  Demonstrated ability to learn quickly and adapt to new
                  technologies and environments
                </li>
                <li>
                  Proactive in identifying issues and implementing effective
                  solutions
                </li>
                <li>
                  Detail-oriented with a keen eye for identifying root causes of
                  problems
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
