import { motion } from 'framer-motion';

function Page({ className, pageKey, children }: PageType) {
  return (
    <motion.main
      className={className}
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
   className: string;
  /**
   * Ключ идентификации элемента по атрибуту
   */
   pageKey: string;
  /**
   * Дочерние элементы
   */
  children: React.ReactNode;
};

export default Page;
export {
  Page,
};
