import React from 'react';
import styles from '@/styles/components/elements/cardElement.module.scss';

const CardContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default CardContainer