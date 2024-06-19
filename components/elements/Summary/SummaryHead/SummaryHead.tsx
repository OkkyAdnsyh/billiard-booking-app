import React from 'react';
import styles from '@/styles/components/elements/summaryElement.module.scss';
import Image from 'next/image';
import { Assets } from '@/components/elements/Assets/Assets';

const SummaryHead = ({orderID, tableType, onWaiting, type} : {orderID?: string, tableType: 'Reguler' | 'Vip', onWaiting: boolean, type: 'Modal' | 'Page'}) => {
  return (
    <article className={styles.head}>
        {onWaiting &&
        <p className={`${styles.notice} ${type === 'Modal' ? styles['notice_center'] : styles['notice_left']}`}>
            All tables are occupied. You’re currently on<br/>
            <b>Waiting List</b>
        </p>
        }
        <h3>Your Order</h3>
        <p className={styles.orderID}>{orderID}</p>
        <p className={styles['table_type']}>{tableType === 'Reguler' ? 'Reguler Table' : 'VIP Room'}</p>
    </article>
  )
}

export default SummaryHead