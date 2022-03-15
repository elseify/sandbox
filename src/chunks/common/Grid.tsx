import styles from './Grid.module.scss';

function Grid({ children }: PropsType) {
  return (
    <div className={styles.block}>
      {children}
    </div>
  );
}

type PropsType = {
  children: React.ReactNode;
};

export {
  Grid,
};
