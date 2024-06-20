import React from 'react';
import styles from '@/styles/components/elements/cardElement.module.scss';

const CardDesc = ({children} : {children: React.ReactNode}) => {
  return (
    <section className={styles.desc}>
        {children}
    </section>
  )
}

export default CardDesc