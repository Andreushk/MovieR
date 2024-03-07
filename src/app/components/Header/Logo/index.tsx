import LogoImage from '@/app/assets/images/logo/Logo.svg';
import Image from 'next/image';
import './styles.css';

const LOGO_ALT = 'application logo';

const Logo: React.FC = () => {
  return (
    <div className="header__logo_container">
      <Image src={LogoImage} priority alt={LOGO_ALT} />
    </div>
  );
};

export default Logo;
