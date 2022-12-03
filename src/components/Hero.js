import styles from "../styles/Hero.module.scss";

const Hero = ({ title, text }) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles["hero-title"]}>{"<Hello World! />"}</h1>
      <p className={styles["hero-text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur.
      </p>
    </div>
  );
};

export default Hero;
