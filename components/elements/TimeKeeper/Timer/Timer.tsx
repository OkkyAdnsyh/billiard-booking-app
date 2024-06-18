'use client';

import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';
import usePlayTimer from '@/utils/customHook/usePlayTimer';
import Hour from '../Hour/Hour';
import Minute from '../Minute/Minute';
import Second from '../Second/Second';


const Timer = ({time} : {time : string | null}) => {
  const {hour, minute, second} = usePlayTimer(time);

  return (
    <section className={styles['timer_container']}>
      <Hour hour={hour as number} />:<Minute minute={minute as number} />:<Second second={second as number}/>
    </section>
  )
}

export default Timer