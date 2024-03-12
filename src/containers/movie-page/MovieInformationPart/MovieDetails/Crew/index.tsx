import UsersGroupIcon from '@/assets/images/icons/user-group.svg';
import UsersIcon from '@/assets/images/icons/users.svg';
import UserIcon from '@/assets/images/icons/user.svg';
import TextBlock from '@/components/common/TextBlock';

const DIRECTOR_TITLE = 'Director';
const WRITER_TITLE = 'Writer';
const ACTORS_TITLE = 'Main Actors';

interface IComponentProps {
  director: string;
  writer: string;
  actors: string;
}

const Crew: React.FC<IComponentProps> = ({ director, writer, actors }) => {
  const isOneDirector: boolean = director.split(',').length === 1;
  const isOneWriter: boolean = writer.split(',').length === 1;

  return (
    <div>
      <TextBlock
        title={`${DIRECTOR_TITLE}${isOneDirector ? '' : 's'}`}
        text={director}
        iconPath={isOneWriter ? UserIcon : UsersIcon}
      />
      <TextBlock
        title={`${WRITER_TITLE}${isOneWriter ? '' : 's'}`}
        text={writer}
        iconPath={isOneWriter ? UserIcon : UsersIcon}
      />
      <TextBlock title={ACTORS_TITLE} text={actors} iconPath={UsersGroupIcon} />
    </div>
  );
};

export default Crew;
