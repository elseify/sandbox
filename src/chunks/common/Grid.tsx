import styles from './Grid.module.scss';

export function Grid(props: PropsType) {
  const {
    children,
  } = props;

  return (
    <div className={styles.block}>
      {children}
    </div>
  );
}

type PropsType = {
  children: React.ReactNode;
};
