import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import StarSvg from '../../assets/star.svg';

export const Rating = ({ number, ...props }: RatingProps): JSX.Element => {
  const threshold = 5;
  const [count, setCount] = useState<number>(number);
  const [establishedCount, setEstablishedCount] = useState<number>(number);

  useEffect(() => {
    setCount(establishedCount);
  }, [establishedCount]);

  const getStarSvgs = (count: number): JSX.Element[] => {
    return new Array(threshold)
      .fill(<></>)
      .map((_, index) => {
        return <StarSvg
          key={index}
          className={
            cn(
              styles.star,
              {
                [styles.primary]: index <= count,
              }
            )
          }
          data-index={index}  
        />;
      });
  };

  const onMouseOver = ({ target }) => {
    const index = target
      .closest('svg')
      ?.getAttribute('data-index');

    if (!index) return;

    setCount(Number(index));
  };

  const onMouseOut = () => {
    setCount(establishedCount);
  };

  const onClick = ({ target }) => {
    const index = target
      .closest('svg')
      ?.getAttribute('data-index');

      if (!index) return;

      setEstablishedCount(Number(index));
  };

  return (
    <div
      className="rating" {...props}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onClick={onClick}
    >
      {getStarSvgs(count)}
    </div>
  );
};