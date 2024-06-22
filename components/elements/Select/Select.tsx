'use client';
import React, { HTMLProps, useState } from 'react';
import styles from '@/styles/components/elements/select.module.scss';

interface ISelect {
    name: string,
    value: string | null,
    placeholder: string
    isOpen: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Select = ({name, value, placeholder, isOpen, onClick, onChange} : ISelect) => {
  return (
    <>
        <section className={styles['container']}>
            <input type='text' className={styles['hidden']} id={name} name={name} onChange={onChange} value={value || ''} />
            <button className={`${styles['display']} ${isOpen ? styles['isOpen'] : styles['isClosed']}`} onClick={onClick} type='button'>
                <p className={`${value !== '' ? styles.value : styles.placeholder}`}>{value === '' ? placeholder : value}</p>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 15L18 24L9 15L11.1 12.9L18 19.8L24.9 12.9L27 15Z" fill="#042A50"/>
                </svg>
            </button> 
        </section>
    </>
  )
}

export default Select