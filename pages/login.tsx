import { Page } from '@common/Page';
import { Logo } from '@user/Logo';
import { LoginForm } from '@dashboard/LoginForm';

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
