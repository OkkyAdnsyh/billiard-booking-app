import React from 'react';
import styles from '@/styles/productPage.module.scss';
import OrderNav from '@/components/modules/Nav/OrderNav';

const TableOrderLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <main className={`wrapper ${styles.container}`}>
        <OrderNav />
        <section>
          {children}
        </section>
      </main>
    </>
  )
}

export default TableOrderLayout