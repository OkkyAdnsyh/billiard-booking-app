import React from 'react';
import styles from '@/styles/components/elements/Product/product.module.scss';

type TProductPrice = {
    label: string,
    nominal: number,
    qty: string
}

const ProductPrice = ({label, nominal, qty}: TProductPrice) => {
    const intlCurrency = new Intl.NumberFormat('id', {
        style : 'currency',
        currency : 'IDR',
        maximumFractionDigits: 0
    }) 
  return (
    <section className={styles['price_container']}>
        <p className={styles.label}>{label}</p>
        <p className={styles.price}>
            {intlCurrency.format(nominal)}/{qty}
        </p>
    </section>
  )
}

export default ProductPrice