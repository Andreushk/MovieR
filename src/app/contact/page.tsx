import { IntroducingSection, FormSection } from '@/containers';
import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MovieR | Contact Us',
  description: 'Contact our support team.',
};

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <IntroducingSection />
      <FormSection />
    </div>
  );
};

export default Contact;
