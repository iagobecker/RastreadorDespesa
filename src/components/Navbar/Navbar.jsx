import { Link } from "react-router-dom";
import styles from "../../styles/Navbar/Navbar.module.scss";

import ListItemLink from "./ListItemLink";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Rastreador</div>
        </Link>
      </div>

      <nav>
        <ul>
          <ListItemLink url="">
            <h3>Home</h3>
          </ListItemLink>

          <ListItemLink url="categories">
            <h3>Categorias</h3>
          </ListItemLink>

          <ListItemLink url="transactions">
            <h3>Transações</h3>
          </ListItemLink>

          <ListItemLink url="wallet">
            <h3>Carteira</h3>
          </ListItemLink>

          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="profile">
              <h3>Perfil</h3>
            </ListItemLink>
          </div>

          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="settings">
              <h3>Configurações</h3>
            </ListItemLink>
          </div>

          <ListItemLink url="logout">
            <h3>Sair</h3>
          </ListItemLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
