import React from 'react';
import styles from '@/styles/components/elements/productElement.module.scss';

const PoolTableStatus = ({status} : {status: boolean}) => {
  return (
    <section className={styles['single_table_status_container']}>
        <p className={styles.label}>Status</p>
        <p className={`${styles.status} ${!status ? styles.avail : styles.full}`}>
        {!status ?
          'Available' : 'Occupied'
        }
      </p>
    </section>
  )
}

export default PoolTableStatus