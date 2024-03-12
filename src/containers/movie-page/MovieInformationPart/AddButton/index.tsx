import AddIcon from '@/assets/images/icons/inbox.svg';
import { Button } from '@/components/common';

const BUTTON_TEXT = 'Add to watchlist';

const AddButton: React.FC = () => (
  <div>
    <Button value={BUTTON_TEXT} iconPath={AddIcon} type="primary" />
  </div>
);

export default AddButton;
