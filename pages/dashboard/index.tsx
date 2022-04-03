import { Page } from '@chunks/common/Page';
import { Section } from '@chunks/dashboard/Section';
import { Item } from '@chunks/dashboard/Item';

import styles from './index.module.scss';

export default function Dashboard() {
  return (
    <Page className={styles.block}>
      <Section name="Компоненты" referTo="chunks">
        <div className={styles.item}>
          <Item name="Модальное окно" referTo="chunks" />
        </div>
        <div className={styles.item}>
          <Item name="Модальное окно" referTo="chunks" />
        </div>
        <div className={styles.item}>
          <Item name="Модальное окно" referTo="chunks" />
        </div>
      </Section>
    </Page>
  );
}
