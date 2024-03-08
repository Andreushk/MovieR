import styles from './styles.module.css';
import ImagePart from './ImagePart';
import TextPart from './TextPart';

const AboutBlock: React.FC = () => {
  return (
    <section className={styles.container}>
      <TextPart />
      <ImagePart />
    </section>
  );
};

export default AboutBlock;
