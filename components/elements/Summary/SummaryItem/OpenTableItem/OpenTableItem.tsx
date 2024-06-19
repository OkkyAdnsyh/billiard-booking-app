import React from 'react';
import styles from '@/styles/components/elements/summaryElement.module.scss';

const OpenTableItem = ({isOpen, tableHourCount} : {isOpen: boolean, tableHourCount: string}) => {
  return (
    <section className={styles.item}>
        <p className={styles.label}>Open Table</p>
        <p className={styles.content}>
            {isOpen ? tableHourCount : 'No'}
        </p>
    </section>
  )
}

export default OpenTableItem