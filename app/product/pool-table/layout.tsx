import React from 'react';
import styles from '@/styles/layout.module.scss';
import { cookies } from 'next/headers';
import Nav from '@/components/modules/Nav/Nav';

const PoolTableLayout = ({children} : {children: React.ReactNode}) => {
    const cookieStore = cookies();
    const bookingID = cookieStore.get('bookingID');
  return (
    <>
        <main className={`wrapper ${styles.main}`}>
            <Nav type='Page' href={bookingID === undefined ? '/pool-table/create-book' : '/pool-table/book-status'} />
            <section className={styles['card_container']}>
                {children}
            </section>
        </main>
    </>
  )
}

export default PoolTableLayout