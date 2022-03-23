import { HeadingProps } from './Heading.props';
import { headingLevels } from './configs';

import styles from './Heading.module.css';

export const Heading = ({ children, level }: HeadingProps): JSX.Element => {
  switch (level) {
    case headingLevels.first:
      return <h1 className={styles.h1}>{children}</h1>;
    case headingLevels.second:
      return <h2 className={styles.h2}>{children}</h2>;
    case headingLevels.third:
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};