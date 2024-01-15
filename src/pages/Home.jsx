import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import Searchbar from "../components/homeComponents/Searchbar";

import styles from "../styles/homeComponents/Home.module.scss";

const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        {/* SEARCHBAR */}
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
