import React from 'react';
import styles from '@/styles/productPage.module.scss';
import ProductNav from '@/components/modules/Nav/ProductNav';

const ProductLayout = ({children, OrderModal} : {children: React.ReactNode, OrderModal: React.ReactNode}) => {
  return (
    <>
      <main className={`wrapper ${styles.container}`}>
        <ProductNav/>
        <section className={styles['card_container']}>
          {children}
        </section>
      </main>
      {OrderModal}
    </>
  )
}

export default ProductLayout