import { AboutSection, SupportedDevicesSection, QuestionsSection } from '@/containers/index';
import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MovieR | About',
  description: 'Learn more about us.',
};

const About: React.FC = () => (
  <div className={styles.container}>
    <AboutSection />
    <SupportedDevicesSection />
    <QuestionsSection />
  </div>
);

export default About;
