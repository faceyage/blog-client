import styles from "../styles/Footer.module.scss";

const Footer = ({ text }) => {
  return (
    <footer>
      <div className={styles["footer-text"]}>{text}</div>
      <div className={styles["icon"]}>Github</div>
    </footer>
  );
};

export default Footer;
