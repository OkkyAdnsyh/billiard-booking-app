import React from 'react';
import styles from '@/styles/components/elements/timeElement.module.scss';

const Second = ({second} : {second: number}) => {
    
  let formattedTime: number;
  let paddedMinute: string;

  if(second === 60){
    formattedTime = 0;
  }else{
    formattedTime = second as number;
  }
  
  paddedMinute = formattedTime?.toString().padStart(2, '0');
  return (
    <p className={styles['time_indicator']}>{formattedTime < 10 ? paddedMinute : formattedTime}</p>
  )
}

export default Second