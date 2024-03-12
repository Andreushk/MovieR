import styles from './styles.module.css';
import ImagePart from './ImagePart';
import TextPart from './TextPart';

const AboutSection: React.FC = () => (
  <section className={styles.container}>
    <TextPart />
    <ImagePart />
  </section>
);

export default AboutSection;
