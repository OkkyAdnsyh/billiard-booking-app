import React from 'react';
import styles from '@/styles/components/elements/card.module.scss';
import CardBody from './CardBody/CardBody';
import CardHead from './CardHead/CardHead';
import CardThumb from './CardThumb/CardThumb';
import CardTitle from './CardTitle/CardTitle';

export type TCard = {
    type : 'Product' | 'Order',
    children : React.ReactNode
}

export const Card = ({type, children} : TCard) => {
  if(type === 'Product') return (
    <section className={`${styles.container} ${styles['type_product']}`}>
        {children}
    </section>
  )
}

export const CardComponent = {CardBody, CardHead, CardThumb, CardTitle}