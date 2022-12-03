import styles from "../styles/Footer.module.scss";

const Footer = ({ text }) => {
  return (
    <footer>
      <div className={styles["footer-text"]}>{text}</div>
      <a href="https://github.com/faceyage/blog-client" className={styles.icon}>
        Github
      </a>
    </footer>
  );
};

export default Footer;
