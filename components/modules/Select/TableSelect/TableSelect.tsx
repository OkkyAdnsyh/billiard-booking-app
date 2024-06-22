'use client';
import React, { useState } from 'react';
import styles from '@/styles/components/modules/selector.module.scss';
import Select from '@/components/elements/Select/Select';
import Option from '@/components/elements/Select/Option/Option';

const TableSelect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string|null>(null);

    const handleOpenSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValue(e.currentTarget.innerHTML)
        setIsOpen(!isOpen)
    }
  return (
    <section className={styles.container}>
        <p className={styles.label}>Choose Table Type</p>
        <Select onClick={handleOpenSelect} isOpen={isOpen} name='tableType' value={value} placeholder='table types' />
        <Option isOpen={isOpen} option={['Reguler Table', 'VIP Room']} onClick={handleOptionClick}/>
    </section>
  )
}

export default TableSelect