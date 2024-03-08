import styles from './styles.module.css';
import Button from '../Button';

interface IComponentProps {
  placeholder: string;
  searchCB: (searchValue: string) => void;
}

const Search: React.FC<IComponentProps> = ({ placeholder, searchCB }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder={placeholder} />
      <div className={styles.button_container}>
        <Button value="Search" type="primary" />
      </div>
    </div>
  );
};

export default Search;
