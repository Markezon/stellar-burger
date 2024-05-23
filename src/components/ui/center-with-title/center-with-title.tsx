import { FC, memo } from 'react';

import styles from './center-with-title.module.css';

import { TCenterUI } from './type';

export const CenterUI: FC<TCenterUI> = memo(
  ({ title, titleStyle, children }) => (
    <>
      <div className={styles.center}>
        <div className={styles.header}>
          <h3 className={`${styles.title} text ${titleStyle}`}>{title}</h3>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
);
