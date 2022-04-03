import { SectionInfo } from './SectionInfo';

import styles from './Section.module.scss';

export function Section(props: PropsType) {
  const {
    name,
    referTo,
    children,
  } = props;

  return (
    <div className={styles.block}>
      <div className={styles.item}>
        <SectionInfo
          name={name}
          referTo={referTo}
        />
      </div>
      <div className={styles.item}>
        {children}
      </div>
    </div>
  );
}

type PropsType = {
  name: string;
  referTo: string;
  children: React.ReactNode;
};
