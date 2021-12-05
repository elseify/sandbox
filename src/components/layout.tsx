import React from 'react';

import cn from 'classnames';

import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';

import styles from './layout.module.scss';

export function Layout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <div className={cn(styles['layout'], 'container')}>
        <div className="layout-item" data-item="page">
          {children}
        </div>
        <div className="layout-item" data-item="side">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

type LayoutType = {
  /**
   * Полученные элементы
   */
  children: React.ReactNode;
};
