import React from 'react';
import { TCard } from '../Card';
import styles from '@/styles/components/elements/card.module.scss';

const CardBody = ({type, children}: TCard) => {
  if(type === 'Product') return (
    <section className={`${styles.body} ${styles['product']}`}>
        {children}
    </section>
  )
}

export default CardBody