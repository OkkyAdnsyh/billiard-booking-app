'use client';

import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';
import usePlayTimer from '@/utils/customHook/usePlayTimer';


const Timer = ({time} : {time : string | null}) => {
  const {hour, minute, second} = usePlayTimer(time);

  return (
    <section className={styles['timer_container']}>
      <p>{hour}</p>
      <p>{minute}</p>
      <p>{second}</p>
    </section>
  )
}

export default Timer