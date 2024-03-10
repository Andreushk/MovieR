import WithClickOutside from '@/hoc/withClickOutside';
import TextBlockPart from './TextBlockPart';
import styles from './styles.module.css';
import TitlePart from './TitlePart';
import Overlay from '../Overlay';

interface IComponentProps {
  closeCB: () => void;
}

const PersonalDataModal: React.FC<IComponentProps> = ({ closeCB }) => {
  return (
    <Overlay>
      <WithClickOutside onOutsideClick={closeCB}>
        <section className={styles.container}>
          <TitlePart />
          <TextBlockPart />
        </section>
      </WithClickOutside>
    </Overlay>
  );
};

export default PersonalDataModal;
