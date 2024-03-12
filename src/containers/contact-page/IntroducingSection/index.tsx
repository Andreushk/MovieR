import PostersImage from '@/assets/images/context/posters.png';
import { Paragraph, Title } from '@/components/common';
import styles from './styles.module.css';
import Image from 'next/image';

const TITLE = 'Welcome to the support page!';
const TEXT = "We're here to help you with any problems you may be having with our product.";
const IMAGE_ALT = 'context image with posters of films';

const IntroducingSection: React.FC = () => (
  <section className={styles.introduction_container}>
    <div className={styles.title_container}>
      <Title>{TITLE}</Title>
      <Paragraph type="secondary">{TEXT}</Paragraph>
    </div>
    <div className={styles.image_container}>
      <Image src={PostersImage} alt={IMAGE_ALT} />
    </div>
  </section>
);

export default IntroducingSection;
