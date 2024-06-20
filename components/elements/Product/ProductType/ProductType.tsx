import React from 'react';
import styles from '@/styles/components/elements/productElement.module.scss';

const ProductType = ({productType} : {productType: string}) => {
  return (
    <p className={styles.type}>{productType}</p>
  )
}

export default ProductType