'use client';
import React, { useState } from 'react';
import styles from '@/styles/components/elements/checkbox.module.scss';

interface ICheckbox {
    name: string,
    label: string,
    info?: string
}
const Checkbox = ({name, label, info}: ICheckbox) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckedBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
    } 
  return (
    <section className={styles.wrapper}>
        <section className={styles.container}>
            <section className={styles['checkbox_container']}>
                <input type="checkbox" name={name} id={name} className={styles['checkbox_hidden']} onChange={handleCheckedBox} />
                <div className={`${styles['checkbox_display']} ${isChecked ? styles.isChecked : styles.isUnchecked}`}>
                    <div className={styles.checklist}></div>
                </div>
            </section>
            <label htmlFor={name} className={styles.label}>{label}</label>
        </section>
        <label htmlFor={name} className={styles.info}>{info}</label>
    </section>
  )
}

export default Checkbox