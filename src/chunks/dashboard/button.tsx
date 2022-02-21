import cn from '@utils/classnames';

import styles from './button.module.scss';

function Button(props: PropsType) {
  const {
    text,
    behavior = 'fit',
    isDisabled,
    ...attrs
  } = props;

  return (
    <div
      className={cn(styles['button'], {
        '_fill': behavior === 'fill',
        '_disabled': isDisabled,
      })}
      {...attrs}
    >
      <span className="button-text">{text}</span>
    </div>
  );
}

type AttrsType = React.HtmlHTMLAttributes<HTMLDivElement>;
type PropsType = {
  text: string;
  behavior?: 'fit' | 'fill';
  isDisabled?: boolean;
} & AttrsType;

export default Button;
export {
  Button,
};
