import React from 'react';
import Nav from '@/components/modules/Nav/Nav';
import styles from '@/styles/layout.module.scss';

const TableBookLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <main className={`wrapper ${styles.main}`}>
        <Nav type='Booking' />
        <section className={styles['content_container']}>
          {children}
        </section>
      </main>
    </>
  )
}

export default TableBookLayout