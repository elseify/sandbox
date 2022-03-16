import { classNames as cn } from '@utils/classnames';

import styles from './Button.module.scss';

function Button(props: PropsType) {
  const {
    text,
    behavior = 'fit',
    isDisabled,
    ...attrs
  } = props;

  return (
    <div
      className={cn(styles.block, {
        '_fill': behavior === 'fill',
        '_disabled': isDisabled,
      })}
      {...attrs}
    >
      <span className={styles.text}>{text}</span>
    </div>
  );
}

type AttrsType = React.HtmlHTMLAttributes<HTMLDivElement>;
type PropsType = {
  text: string;
  behavior?: 'fit' | 'fill';
  isDisabled?: boolean;
} & AttrsType;

export {
  Button,
};
