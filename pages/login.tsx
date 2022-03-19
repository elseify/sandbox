import { Page } from '@chunks/common/Page';
import { Logo } from '@chunks/user/Logo';
import { LoginForm } from '@chunks/user/LoginForm';

import styles from './login.module.scss';

function Login() {
  return (
    <Page className={styles.block}>
      <div className={styles.layer}>
        <div className={styles.layerItem}>
          <Logo />
        </div>
        <div className={styles.layerForm}>
          <LoginForm />
        </div>
      </div>
    </Page>
  );
}

export default Login;
