import React from 'react';
import styles from '@/styles/productPage.module.scss';
import Nav from '@/components/modules/Nav/Nav';

const TableOrderLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <main className={`wrapper ${styles.container}`}>
        <Nav />
        <section>
          {children}
        </section>
      </main>
    </>
  )
}

export default TableOrderLayout