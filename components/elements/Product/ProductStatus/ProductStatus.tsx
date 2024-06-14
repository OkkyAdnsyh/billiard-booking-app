import React from 'react';
import styles from '@/styles/components/elements/Product/product.module.scss';

const ProductStatus = ({status} : {status: boolean}) => {
  return (
    <section className={styles['status_container']}>
        <p className={styles.label}>Status</p>
        <p className={`${styles.status} ${status ? styles.avail : styles.full}`}>
            {status ?
                'Available' : 'Full Booked'
            }
        </p>
    </section>
  )
}

export default ProductStatus