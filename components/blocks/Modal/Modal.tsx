import React from 'react';
import styles from '@/styles/components/blocks/modal.module.scss';
import Link from 'next/link';

const Modal = ({children} : {children: React.ReactNode}) => {
  return (
    <>
        <section className={styles['wrapper']}>
          {children}
        </section>
    </>
  )
}

export default Modal