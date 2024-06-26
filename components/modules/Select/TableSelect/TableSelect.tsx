'use client';
import React, { useState } from 'react';
import styles from '@/styles/components/modules/selector.module.scss';
import Select from '@/components/elements/Select/Select';
import Option from '@/components/elements/Select/Option/Option';

const TableSelect = ({value, onClick} : {value: string, onClick: (e:React.MouseEvent<HTMLButtonElement>) => void}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpen(!isOpen)
    }
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsOpen(!isOpen)
    }

  return (
    <section className={styles.container}>
        <p className={styles.label}>Choose Table Type</p>
        <Select onClick={handleOpenSelect} isOpen={isOpen} name='tableType' value={value} placeholder='table types' onChange={handleChangeValue} />
        <Option isOpen={isOpen} option={['Reguler Table', 'VIP Room']} onClick={onClick}/>
    </section>
  )
}

export default TableSelect