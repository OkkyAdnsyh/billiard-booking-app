import React from 'react';
import styles from '@/styles/components/elements/timeKeeper.module.scss';

const Hour = ({hour} : {hour : number}) => {
  
  let paddedTime : string = hour?.toString().padStart(2, '0');
  return (
    <p className={styles['time_indicator']}>{hour < 10 ? paddedTime : hour}</p>
  )
}

export default Hour