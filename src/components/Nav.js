import styles from "../styles/Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/" className={styles.logo}>
          personal blog
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
