import styles from './styles.module.css';
import Item from './Item';

interface IComponentsProps {
  firstTitle: string;
  secondTitle: string;
  firstText: string;
  secondText: string;
  firstIconPath: string;
  secondIconPath: string;
}

const DetailsBlock: React.FC<IComponentsProps> = ({
  firstTitle,
  secondTitle,
  firstText,
  secondText,
  firstIconPath,
  secondIconPath,
}) => (
  <div className={styles.details_block}>
    <Item title={firstTitle} text={firstText} iconPath={firstIconPath} />
    <Item title={secondTitle} text={secondText} iconPath={secondIconPath} />
  </div>
);

export default DetailsBlock;
