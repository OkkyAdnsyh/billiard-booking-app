'use client';

import React, { useEffect, useState } from 'react'
import OrderNav from '../Nav/OrderNav';
import styles from '@/styles/components/blocks/modal.module.scss';

const OrderModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    useEffect(() => {
        setOpenModal(!openModal);

        return () => {
            setOpenModal(!openModal)
        }
    }, [])
  return (
    <>
        <section className={`${styles.container} ${!openModal ? styles['isClosed'] : styles['isOpen']}`}>
            <OrderNav />
        </section>
    </>
  )
}

export default OrderModal