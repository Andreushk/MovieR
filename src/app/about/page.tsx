import { AboutBlock, DevicesSupportBlock, QuestionsBlock } from '@/components/pages';
import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MovieR | About',
  description: 'Learn more about us.',
};

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <AboutBlock />
      <DevicesSupportBlock />
      <QuestionsBlock />
    </div>
  );
};

export default About;
