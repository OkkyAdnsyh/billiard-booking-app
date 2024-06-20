import React from 'react';
import styles from '@/styles/components/elements/productElement.module.scss';

const ProductTag = ({tag} : {tag: string}) => {
  return (
    <p className={styles.tag}>{tag}</p>
  )
}

export default ProductTag