import React from 'react';

import cn from 'classnames';

import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';

import styles from './layout.module.scss';

export function Layout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <div className={styles['layout']}>
        <div className="layout-layer container">
          <div className="layer-item" data-item="page">
            {children}
          </div>
          <div className="layer-item" data-item="side">
            <Sidebar />
          </div>
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
