import { Title } from '@/components/common';
import styles from './styles.module.css';
import Grid from './Grid';

const DEVICES_SECTION_TITLE = 'We support all types of devices:';

const DevicesSupportBlock: React.FC = () => {
  return (
    <section className={styles.container}>
      <Title>{DEVICES_SECTION_TITLE}</Title>
      <Grid />
    </section>
  );
};

export default DevicesSupportBlock;
