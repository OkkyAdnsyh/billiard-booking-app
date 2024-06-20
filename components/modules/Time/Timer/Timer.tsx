'use client';

import React from 'react';
import styles from '@/styles/components/modules/time.module.scss';
import { TimeElements } from '@/components/elements/Time';
import { useTimer } from '@/utils/customHook/useTimer';

const Timer = ({count} : {count: number}) => {
    let {hour, minute, second} = useTimer(count);

  return (
    <>
        <section className={styles.container}>
            <TimeElements.Hour hour={hour} />:<TimeElements.Minute minute={minute} />:<TimeElements.Second second={second}/>
        </section>
    </>
  )
}

export default Timer