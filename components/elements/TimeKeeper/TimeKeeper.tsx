import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';
import Timer from './Timer/Timer';

type TTimeKeeper = {
    timerType: 'Timer' | 'Stopwatch',
    time: string | null,
    orderID: string | null,
    label: string,
}

export const TimeKeeper = ({label, timerType, time, orderID} : TTimeKeeper) => {
  return (
    <section className={styles.container}>
        <p className={styles.label}>{label}</p>
        <section className={styles['time_container']}>
          <p className={styles['order_id']}>{orderID === null ? 'none' : orderID}</p>
          {timerType === 'Timer' && <Timer time={time} />}
        </section>
    </section>
  )
}