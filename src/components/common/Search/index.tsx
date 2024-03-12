'use client';

import styles from './styles.module.css';
import Button from '../Button';
import { useRef } from 'react';

interface IComponentProps {
  placeholder: string;
  searchCB: (searchValue: string) => void;
}

const Search: React.FC<IComponentProps> = ({ placeholder, searchCB }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current) {
      const inputValue: string = inputRef.current.value.trim();
      searchCB(inputValue);
    }
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder={placeholder} ref={inputRef} />
      <div className={styles.button_container}>
        <Button value="Search" type="primary" clickCB={handleClick} />
      </div>
    </div>
  );
};

export default Search;
