import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
