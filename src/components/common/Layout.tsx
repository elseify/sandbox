import { Header as DashHeader } from '@components/dashboard/Header';
import { Header as UserHeader } from '@components/user/Header';

import styles from './Layout.module.scss';

export function Layout(props: PropsType) {
  const {
    type = 'user',
    children,
  } = props;

  return (
    <>
      {renderHeader(type)}
      {type !== 'none' ? (
        <div className={styles.block}>
          <div className="container">
            {children}
          </div>
          {type === 'dashboard' ? (
            <style jsx global>{`body { background-color: #FFFFFF; }`}</style>
          ) : (
            <style jsx global>{`body { background-color: #F2F4F6; }`}</style>
          )}
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

function renderHeader(type: 'dashboard' | 'user' | 'none') {
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
   * шапки и фон сайта
   */
  type?: 'dashboard' | 'user' | 'none';
  children: React.ReactNode;
};
