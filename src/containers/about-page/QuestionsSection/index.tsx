'use client';

import { Button, Paragraph, Title } from '@/components/common';
import EmailIcon from '@/assets/images/icons/mail.svg';
import emailAddress from '@/constants/email';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

const QUESTIONS_SECTION_TITLE = 'Any questions?';
const QUESTIONS_SECTION_TEXT =
  'You can ask anything! We can be contacted using the "Contact" page by clicking on the button in this section or by writing manually to our mailbox: ';
const QUESTIONS_SECTION_BUTTON = 'Write a message';

const QuestionsSection: React.FC = () => {
  const router = useRouter();

  const handleWriteButtonClick = (): void => {
    router.push('/contact');
  };

  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <Title>{QUESTIONS_SECTION_TITLE}</Title>
        <Paragraph type="secondary">{`${QUESTIONS_SECTION_TEXT} ${emailAddress}`}</Paragraph>
      </div>
      <div className={styles.button_container}>
        <Button
          type="primary"
          value={QUESTIONS_SECTION_BUTTON}
          iconPath={EmailIcon}
          clickCB={handleWriteButtonClick}
        />
      </div>
    </section>
  );
};

export default QuestionsSection;
