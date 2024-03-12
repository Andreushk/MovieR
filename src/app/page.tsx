import SearchSection from '@/containers/discover-page/SearchSection';
import styles from './styles.module.css';

const Home: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.background_container}>
      <div className={styles.blur_container}>
        <SearchSection />
      </div>
    </div>
  </div>
);

export default Home;
