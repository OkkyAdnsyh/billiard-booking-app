import React from 'react';
import styles from '@/styles/components/modules/bookingOption.module.scss';
import Selector from '../Select/Selector/Selector';
import Checkbox from '@/components/elements/Checkbox/Checkbox';

const BookingOption = ({value, onCLick, option, selectorName, checkboxName, label, info} : {value: string, onCLick: (e:React.MouseEvent<HTMLButtonElement>) => void, option: string[], selectorName: string, checkboxName: string, label: string, info: string}) => {
  return (
    <section className={styles.container}>
        <Selector value={value} option={option} onClick={onCLick} label='Choose Package' name={selectorName} />
        <p className={styles.separator}>Or</p>
        <Checkbox name={checkboxName} label={label} info={info} />
    </section>
  )
}

export default BookingOption