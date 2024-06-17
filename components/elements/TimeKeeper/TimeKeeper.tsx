import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';
import Timer from './Timer/Timer';

type TTimeKeeper = {
    timerType: 'Timer' | 'Stopwatch',
    time?: number,
    orderID?: string | null,
    label: string
}

export const TimeKeeper = ({label, timerType, time} : TTimeKeeper) => {
  return (
    <section className={styles.container}>
        <p className={styles.label}>{label}</p>
        {timerType === 'Timer' && <Timer time={time as number} />}
    </section>
  )
}