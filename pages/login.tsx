import { Page } from '@chunks/common/Page';
import { Logo } from '@chunks/user/Logo';
import { Form } from '@chunks/user/Form';

import styles from './login.module.scss';

export default function Login() {
  return (
    <Page className={styles.block}>
      <div className={styles.layer}>
        <div className={styles.layerItem}>
          <Logo />
        </div>
        <div className={styles.layerForm}>
          <Form />
        </div>
      </div>
    </Page>
  );
}
