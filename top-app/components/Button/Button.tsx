import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

import { appearances, arrowDirections } from './configs';
import ArrowSvg from '../../assets/arrow.svg';
import { isEqual } from '../../utilities';

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
          [styles.primary]: isEqual(appearance, appearances.primary),
          [styles.ghost]: isEqual(appearance, appearances.ghost),
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
                [styles.down]: isEqual(arrowDirection, arrowDirections.down),
                [styles.right]: isEqual(arrowDirection, arrowDirections.right),
              }
            )
          }/>
      }
    </button>
  );
};