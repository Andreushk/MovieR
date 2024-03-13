'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Button from '../Button';

interface IComponentProps {
  placeholder: string;
  searchCB: (searchValue: string) => void;
}

const Search: React.FC<IComponentProps> = ({ placeholder, searchCB }) => {
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current) {
      const inputValue: string = inputRef.current.value.trim();
      searchCB(inputValue);
    }
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (isOnFocus && inputRef.current) {
      inputRef.current.addEventListener('keypress', handleKeyPress);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, [isOnFocus]);

  const handleInputFocus = (): void => {
    setIsOnFocus(true);
  };

  const handleInputBlur = (): void => {
    setIsOnFocus(false);
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div className={styles.button_container}>
        <Button value="Search" type="primary" clickCB={handleClick} />
      </div>
    </div>
  );
};

export default Search;
