import styles from "../../styles/homeComponents/Searchbar.module.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.inner}>
        <div className={styles.searchContainer}>
          <FiSearch />
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className={styles.menuLink}>
          <Link to="wallet">Carteira</Link>
        </div>
        <div className={styles.menuLink}>
          <Link to="settings">Configurações</Link>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
