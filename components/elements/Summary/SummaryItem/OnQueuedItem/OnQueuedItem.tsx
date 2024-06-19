import React from 'react';
import styles from '@/styles/components/elements/summaryElement.module.scss';

const OnQueuedItem = ({onQueued, tableID} : {onQueued: boolean, tableID: string}) => {
  return (
    <>
        <section className={styles.item}>
            <p className={styles.label}>Waiting On Table</p>
            <p className={styles.content}>
                {onQueued ? tableID : 'Not Queued Yet'}
            </p>
        </section>
    </>
  )
}

export default OnQueuedItem