import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

import { tagColors, tagSizes } from './configs';
import { isEqual } from '../../utilities';

import cn from 'classnames';

export const Tag = ({ children: text, className, color, href, size = 'M', ...props }: TagProps): JSX.Element => {
  return <div className={
      cn(styles.tag, className, {
        [styles.s]: isEqual(size, tagSizes.small),
        [styles.m]: isEqual(size, tagSizes.medium),
        [styles.gray]: isEqual(color, tagColors.gray),
        [styles.green]: isEqual(color, tagColors.green),
        [styles.ghost]: isEqual(color, tagColors.ghost),
        [styles.red]: isEqual(color, tagColors.red),
        [styles.primary]: isEqual(color, tagColors.primary),
      })
    }
    {...props}
    >
      {href ? <a href={href}>{text}</a> : <>{text}</>}
    </div>;
};
