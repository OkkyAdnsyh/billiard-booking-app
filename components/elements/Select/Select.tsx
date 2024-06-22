import React from 'react';
import styles from '@/styles/components/elements/select.module.scss';

interface ISelect {
    name: string,
    value: string | null,
    placeholder: string
    isOpen: boolean,
    // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Select = ({name, value, placeholder, isOpen, onClick} : ISelect) => {
  return (
    <>
        <section className={styles['container']}>
            <select className={styles['hidden']} name={name} value={value !== null ? value : undefined} />
            <button className={`${styles['display']} ${isOpen ? styles['isOpen'] : styles['isClosed']}`} onClick={onClick} type='button'>
                <p className={`${value !== null ? styles.value : styles.placeholder}`}>{value !== null ? value : placeholder}</p>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 15L18 24L9 15L11.1 12.9L18 19.8L24.9 12.9L27 15Z" fill="#042A50"/>
                </svg>
            </button> 
        </section>
    </>
  )
}

export default Select