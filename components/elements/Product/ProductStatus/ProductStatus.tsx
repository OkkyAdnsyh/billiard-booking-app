import React from 'react';
import styles from '@/styles/components/elements/Product/product.module.scss';

type TProductStatus = {
  status: boolean,
  type: 'Group' | 'Single',
  productType?: 'Table' | 'FnB'
}

const ProductStatus = ({status, type, productType} : TProductStatus) => {
  if(type === 'Group') return (
    <section className={styles['status_container']}>
        <p className={styles.label}>Status</p>
        <p className={`${styles.status} ${status ? styles.avail : styles.full}`}>
            {status ?
                'Available' : 'Full Booked'
            }
        </p>
    </section>
  )
  if(type === 'Single' && productType === 'Table') return (
    <section className={styles['status_single']}>
      <p className={styles.label}>Status</p>
      <p className={`${styles.status} ${status ? styles.avail : styles.full}`}>
        {status ?
          'Available' : 'Occupied'
        }
      </p>
    </section>
  )
}

export default ProductStatus