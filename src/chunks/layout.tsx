import { Header } from '@chunks/user/header';

import styles from './layout.module.scss';

function Layout({ type = 'user', children }: PropsType) {
  return (
    <>
      {type === 'user' ? <Header /> : null}
      {type !== 'none' ? (
        <div className={styles['layout']}>
          <div className="container">
            {children}
          </div>
          <style jsx global>{`body { background-color: #F2F4F6; }`}</style>
        </div>
      ) : (
        <div className="container">
          {children}
          <style jsx global>{`body { background-color: #FFFFFF; }`}</style>
        </div>
      )}
    </>
  );
}

type PropsType = {
  type?: 'dashboard' | 'user' | 'none';
  /**
   * Дочерние элементы компонента
   */
  children: React.ReactNode;
};

export default Layout;
export {
  Layout,
};
