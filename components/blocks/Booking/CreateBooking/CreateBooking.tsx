import React from 'react';
import styles from '@/styles/components/blocks/booking.module.scss';

const CreateBooking = ({children} : {children: React.ReactNode}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Book Table Now</h1>
        {children}
    </section>
  )
}

export default CreateBooking