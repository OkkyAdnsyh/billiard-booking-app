import React from 'react';
import styles from '@/styles/components/elements/timeElement.module.scss';

const Minute = ({minute} : {minute : number}) => {
  
  let formattedMinute: number;
  let paddedMinute: string;

  if(minute === 60){
    formattedMinute = 0;
  }else{
    formattedMinute = minute as number;
  }
  
  paddedMinute = formattedMinute?.toString().padStart(2, '0');

  return (
    <p className={styles['time_indicator']}>{formattedMinute < 10 ? paddedMinute : formattedMinute}</p>
  )
}

export default Minute