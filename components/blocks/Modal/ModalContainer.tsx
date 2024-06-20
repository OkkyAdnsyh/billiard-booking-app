'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/blocks/modal.module.scss';

const ModalContainer = ({children} : {children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(!isOpen);

        return () => {
            setIsOpen(!isOpen)
        }
    }, [])
  return (
    <section className={`${styles.container} ${!isOpen ? styles['isClosed'] : styles['isOpen']}`}>
        {children}
    </section>
  )
}

export default ModalContainer