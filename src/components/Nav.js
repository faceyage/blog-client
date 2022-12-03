import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/blog-client" className={styles.logo}>
          personal blog
        </a>
        {/* <ul className={styles["nav-items"]}>
        <li>Contact</li>
      </ul> */}
      </nav>
    </header>
  );
};

export default Nav;
