import { Paragraph, Search, Title } from './components/common';
import styles from './styles.module.css';
import { useCallback } from 'react';

const SEARCH_TITLE = "Find out more about the movie you're interested in!";
const SEARCH_PARAGRAPH =
  'Type the movie title in the search area and click the search button to see the movie information';
const SEARCH_PLACEHOLDER = 'Type movie title here...';

const Home: React.FC = () => {
  const handleSearch = useCallback((searchValue: string): void => {
    console.log(searchValue);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background_container}>
        <div className={styles.blur_container}>
          <div className={styles.search_container}>
            <div className={styles.text_container}>
              <Title>{SEARCH_TITLE}</Title>
              <Paragraph>{SEARCH_PARAGRAPH}</Paragraph>
            </div>
            <Search placeholder={SEARCH_PLACEHOLDER} searchCB={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
