'use client'
import React, { useState } from 'react';
import styles from '@/styles/components/modules/selector.module.scss';
import Select from '@/components/elements/Select/Select';
import Option from '@/components/elements/Select/Option/Option';

const Selector = ({value, onClick, label, option, name} : {value: string, onClick: (e:React.MouseEvent<HTMLButtonElement>) => void, label: string, option: string[], name: string}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpen(!isOpen)
    }
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsOpen(!isOpen)
    }
  return (
    <section className={styles.container}>
        <p className={styles.label}>{label}</p>
        <Select onClick={handleOpenSelect} isOpen={isOpen} name={name} value={value} placeholder='table types' onChange={handleChangeValue} />
        <Option isOpen={isOpen} option={option} onClick={onClick}/>
    </section>
  )
}

export default Selector