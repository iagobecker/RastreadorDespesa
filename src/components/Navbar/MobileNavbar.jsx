import styles from "../../styles/Navbar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

import ListItemLink from "./ListItemLink";

import { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {/* BARS */}
        <div
          className={`${styles.iconContainer} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <nav className={navOpen ? styles.navActive : undefined}>
          <ul>
            {/* TIMES */}
            <div
              className={`${styles.iconContainer} ${styles.times}`}
              onClick={() => setNavOpen(false)}
            >
              <FaTimes />
            </div>

            {/* HOME */}
            <ListItemLink
              url=""
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Home</h3>
            </ListItemLink>

            {/* CATEGORIES */}
            <ListItemLink
              url="categories"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Categorias</h3>
            </ListItemLink>

            <ListItemLink
              url="transactions"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Transações</h3>
            </ListItemLink>

            <ListItemLink
              url="wallet"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Carteira</h3>
            </ListItemLink>

            <div className={styles.mobileMenuLinks}>
              <ListItemLink
                url="profile"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Perfil</h3>
              </ListItemLink>
            </div>

            <div className={styles.mobileMenuLinks}>
              <ListItemLink
                url="settings"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Configurações</h3>
              </ListItemLink>
            </div>

            <ListItemLink url="logout" optionClass={styles.linkColor}>
              <h3>Sair</h3>
            </ListItemLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
