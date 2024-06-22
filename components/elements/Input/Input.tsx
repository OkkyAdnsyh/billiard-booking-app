'use client';
import React, { HTMLProps, useState } from 'react';
import styles from '@/styles/components/elements/input.module.scss';

interface IInput extends HTMLProps<HTMLInputElement>{
    inputLabel: string
}
const Input = ({inputLabel, name, ...rest} : IInput) => {
    const [value, setValue] = useState<string|null>(null);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value => e.target.value);
    }
  return (
    <section className={styles.container}>
        <label htmlFor={name} className={styles.label}>{inputLabel}</label>
        <input className={styles['input_container']} name={name} id={name} value={value === null ? undefined : value as string} onChange={handleOnChange} {...rest} />
    </section>
  )
}

export default Input