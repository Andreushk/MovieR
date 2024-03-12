'use client';

import { Paragraph, Search, Title } from '@/components/common';
import styles from './styles.module.css';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const SEARCH_TITLE = "Find out more about the movie you're interested in!";
const SEARCH_PARAGRAPH =
  'Type the movie title in the search area and click the search button to see the movie information';
const SEARCH_PLACEHOLDER = 'Type movie title here...';

const SearchSection: React.FC = () => {
  const router = useRouter();

  const handleSearch = useCallback((searchValue: string): void => {
    router.push(`/title/${searchValue}`);
  }, []);

  return (
    <div className={styles.search_container}>
      <div className={styles.text_container}>
        <Title>{SEARCH_TITLE}</Title>
        <Paragraph type="primary">{SEARCH_PARAGRAPH}</Paragraph>
      </div>
      <Search placeholder={SEARCH_PLACEHOLDER} searchCB={handleSearch} />
    </div>
  );
};

export default SearchSection;
