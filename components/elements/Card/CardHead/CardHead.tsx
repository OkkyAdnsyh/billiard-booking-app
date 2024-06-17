import React from 'react';
import styles from '@/styles/components/elements/card.module.scss';

const CardHead = ({children} : {children: React.ReactNode}) => {
  return (
    <section className={styles.head}>
        {children}
    </section>
  )
}

export default CardHead