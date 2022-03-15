import { Header as DashHeader } from '@dashboard/Header';
import { Header as UserHeader } from '@user/Header';

import styles from './Layout.module.scss';

function Layout({ type = 'user', children }: PropsType) {
  return (
    <>
      {renderHeader(type)}
      {type !== 'none' ? (
        <div className={styles.block}>
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

function renderHeader(type: LayoutType) {
  switch (type) {
    case 'dashboard':
      return <DashHeader />
    case 'user':
      return <UserHeader />
    default:
      return null;
  }
}

type PropsType = {
  /**
   * Тип макета в зависимости от которого определяется вариант
   * шапки и фона сайта
   */
  type?: LayoutType;
  /**
   * Дочерние элементы компонента
   */
  children: React.ReactNode;
};

type LayoutType = 'dashboard' | 'user' | 'none';

export {
  Layout,
};
