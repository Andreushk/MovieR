import './styles.css';

const SIGNUP_BUTTON = 'Sign up';
const LOGIN_BUTTON = 'Log in';

const Account: React.FC = () => {
  return (
    <div className="header__registration__buttons">
      <button>{SIGNUP_BUTTON}</button>
      <button>{LOGIN_BUTTON}</button>
    </div>
  );
};

export default Account;
