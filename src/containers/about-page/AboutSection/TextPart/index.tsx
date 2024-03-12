import { Paragraph, Title } from '@/components/common';
import styles from './styles.module.css';

const ABOUT_SECTION_TITLE = "What's this app for?";
const ABOUT_SECTION_FIRST_PART =
  'This app allows you to find basic information about movies and TV series. All you have to do is go to the "Discover" page and write the name of the movie there.';
const ABOUT_SECTION_SECOND_PART =
  'You can also securely register and manage lists of movies you want to watch or have already watched.';

const TextPart: React.FC = () => (
  <div className={styles.container}>
    <Title>{ABOUT_SECTION_TITLE}</Title>
    <Paragraph type="secondary">{ABOUT_SECTION_FIRST_PART}</Paragraph>
    <br />
    <Paragraph type="secondary">{ABOUT_SECTION_SECOND_PART}</Paragraph>
  </div>
);

export default TextPart;
