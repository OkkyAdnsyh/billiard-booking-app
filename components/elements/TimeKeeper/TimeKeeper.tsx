import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';

type TTimeKeeper = {
    playerID: string | null,
    label: string,
    children: React.ReactNode
}

export const TimeKeeper = ({playerID, label, children} : TTimeKeeper) => {
  return (
    <section className={styles.container}>
        <p className={styles.label}>{label}</p>
        <section className={styles['time_container']}>
          <p className={styles['order_id']}>{playerID === null ? 'None' : playerID}</p>
          {children}
        </section>
    </section>
  )
}