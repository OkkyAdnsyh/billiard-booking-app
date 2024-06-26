import React from 'react';
import styles from '@/styles/components/elements/cardElement.module.scss';

const CardTitle = ({children} : {children : React.ReactNode}) => {
  return (
    <section className={styles.title}>
        {children}
    </section>
  )
}

export default CardTitle