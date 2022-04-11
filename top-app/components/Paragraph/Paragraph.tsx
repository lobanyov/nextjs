import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

import cn from 'classnames';

import { paragraphSizes } from './configs';
import { isEqual } from '../../utilities';

export const Paragraph = ({ children: text, size }: ParagraphProps): JSX.Element => {
  return <p className={
      cn(styles.p, {
        [styles.s]: isEqual(size, paragraphSizes.small),
        [styles.m]: isEqual(size, paragraphSizes.medium),
        [styles.l]: isEqual(size, paragraphSizes.large),
      })
    }>
      {text}
    </p>;
};
