import React from 'react';
import styles from '@/styles/productPage.module.scss';
import Nav from '@/components/modules/Nav/Nav';

const ProductLayout = ({children, OrderModal} : {children: React.ReactNode, OrderModal: React.ReactNode}) => {
  return (
    <>
      <main className={`wrapper ${styles.container}`}>
        <Nav/>
        <section className={styles['card_container']}>
          {children}
        </section>
      </main>
      {OrderModal}
    </>
  )
}

export default ProductLayout