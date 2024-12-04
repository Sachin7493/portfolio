import React from "react";
import styles from "./About.module.css";
import getImageUrl from "../utils";

const About = () => {
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
              <p>
                I'm a frontend developer with experience in building responsive
                application and website.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm also a Backend developer with experience in building
                responsive application and website with the help of APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="problem icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solver</h3>
              <p>
                I am a passionate problem-solver with a strong foundation in
                programming and full-stack development, I thrive on tackling
                technical problems, optimizing processes, and creating
                user-centric applications.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
