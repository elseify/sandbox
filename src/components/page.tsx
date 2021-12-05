import React from 'react';

import { motion } from 'framer-motion';

export function Page({ pageName, pageKey, children }: PageType) {
  return (
    <motion.main
      className={pageName}
      data-page={pageKey}
      initial="hide"
      animate="show"
      exit="hide"
      variants={{
        hide: {
          opacity: 0,
        },
        show: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.main>
  );
}

type PageType = {
  /**
   * Имя класса элемента
   *
   * Используется имя полученное из файла модуля стилей
   */
   pageName: string;
  /**
   * Ключ идентификации элемента по атрибуту
   */
   pageKey: string;
  /**
   * Наследуемые элементы
   */
  children: React.ReactNode;
};
