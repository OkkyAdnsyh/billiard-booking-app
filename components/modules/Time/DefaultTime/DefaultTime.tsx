import React from 'react';
import usePlayTimer from '@/utils/customHook/usePlayTimer';
import styles from '@/styles/components/modules/time.module.scss';
import { TimeElements } from '@/components/elements/Time';

const DefaultTime = () => {
  return (
    <section className={styles.container}>
      <TimeElements.Hour hour={0} />:<TimeElements.Minute minute={0} />:<TimeElements.Second second={0}/>
    </section>
  )
}

export default DefaultTime