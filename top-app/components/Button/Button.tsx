import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { appearances } from './configs';

export const Button = ({ appearance, children: text }: ButtonProps): JSX.Element => {
  return (
    <button className={
      cn(
        styles.button,
        {
          [styles.primary]: appearance === appearances.primary,
          [styles.ghost]: appearance === appearances.ghost,
        },
      )
    }>
      {text}
    </button>
  );
};