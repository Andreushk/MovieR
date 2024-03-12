import Paragraph from '../../common/Paragraph';
import styles from './styles.module.css';
import Navigation from './Navigation';

const COPYRIGHT = ' - MovieR - Developed by Andrei Shket in educational proposes';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Navigation />
    <hr className={styles.line} />
    <Paragraph type="secondary">{`© ${new Date().getFullYear()}${COPYRIGHT}`}</Paragraph>
  </footer>
);

export default Footer;
