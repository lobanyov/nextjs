import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

import ArrowSvg from '../../assets/arrow.svg';
import { appearances, arrowDirections } from './configs';

import cn from 'classnames';

export const Button = (
  {
    appearance,
    // Do 'none' as a default value if arrowDirection prop isn't set
    arrowDirection = 'none',
    children: text
  }: ButtonProps
): JSX.Element => {
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
      {
        arrowDirection !== arrowDirections.none
        // Render arrow icon
        && <ArrowSvg className={
            cn(
              {
                [styles.down]: arrowDirection === arrowDirections.down,
                [styles.right]: arrowDirection === arrowDirections.right,
              }
            )
          }/>
      }
    </button>
  );
};