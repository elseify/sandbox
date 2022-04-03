import { forwardRef } from 'react';

import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  const {
    error,
    isTouched,
    ...attrs
  } = props;

  return (
    <input
      className={styles.block}
      type="text"
      name="text"
      ref={ref}
      {...attrs}
    />
  );
});

Input.displayName = 'Input';

type AttrsType = React.InputHTMLAttributes<HTMLInputElement>;
type PropsType = {
  error?: string;
  isTouched?: boolean;
} & AttrsType;
