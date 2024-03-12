import styles from './styles.module.css';

const SIGNUP_BUTTON = 'Sign up';
const LOGIN_BUTTON = 'Log in';

const RegistrationButtons: React.FC = () => (
  <div className={styles.registration_buttons_container}>
    <button>{SIGNUP_BUTTON}</button>
    <button>{LOGIN_BUTTON}</button>
  </div>
);

export default RegistrationButtons;
