import { forwardRef } from 'react';

import styles from './input.module.scss';

const Input = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  const {
    error,
    isTouched,
    ...attrs
  } = props;

  return (
    <input
      className={styles['input']}
      type="text"
      name="text"
      ref={ref}
      {...attrs}
    />
  );
});

type AttrsType = React.InputHTMLAttributes<HTMLInputElement>;
type PropsType = {
  error?: string;
  isTouched?: boolean;
} & AttrsType;

export default Input;
export {
  Input,
};
