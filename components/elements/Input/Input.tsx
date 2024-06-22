'use client';
import React, { HTMLProps, useState } from 'react';
import styles from '@/styles/components/elements/input.module.scss';
import { IInput } from '@/lib/Interface/interface';

const Input = ({label, name, onChange, value, ...rest} : IInput) => {
  return (
    <section className={styles.container}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input className={styles['input_container']} name={name} id={name} value={value} onChange={onChange} {...rest} />
    </section>
  )
}

export default Input