import React from 'react';
import styles from '@/styles/components/elements/card.module.scss';

const CardTitle = ({content} : {content: string}) => {
  return (
    <h6 className={styles.title}>{content}</h6>
  )
}

export default CardTitle