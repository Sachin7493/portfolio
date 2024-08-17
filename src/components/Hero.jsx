import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import getImageUrl from "../utils";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(".description", {
      strings: ["Full-stack developer", "Software Developer"],
      typeSpeed: 100,
      backSpeed: 10,
      loop: true,
    });
    typedRef.current = typed;
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sachin Kumar</h1>
        <p className={styles.description}>
          I'm a <span className="description"></span>
        </p>
        <a href="mailto:sachin200216@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
