'use client';

import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';
import useTimer from '@/utils/customHook/useTimer';


const Timer = ({time} : {time : string}) => {
  const {hour, minute, second} = useTimer(time);

  return (
    <section className={styles['timer_container']}>
      <p>{hour}</p>
      <p>{minute}</p>
      <p>{second}</p>
    </section>
  )
}

export default Timer