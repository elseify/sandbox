import { motion } from 'framer-motion';

export function Page(props: PropsType) {
  const {
    className,
    children,
  } = props;

  return (
    <motion.main
      className={className}
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

type PropsType = {
  className: string;
  children: React.ReactNode;
};
