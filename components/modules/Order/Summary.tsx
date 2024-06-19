'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/modules/summary.module.scss';
import Nav from '../Nav/Nav';
import { SummaryElements } from '@/components/elements/Summary';
import { SummaryItem } from '@/components/elements/Summary/SummaryItem';

interface ISummary{
  type: 'Modal' | 'Page',
  tableType: 'Reguler' | 'Vip',
  orderID: string | null,
  onWaiting: boolean,
  onQueued: boolean,
  tableID?: string,
  isOpen: boolean,
  packageContent?: string
  tableHourCount?: string

}
const Summary = ({type, tableType, orderID, onWaiting, onQueued, tableID, isOpen, packageContent, tableHourCount} : ISummary) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    useEffect(() => {
        setOpenModal(!openModal);

        return () => {
            setOpenModal(!openModal)
        }
    }, [])
  return (
    <section className={`${styles.container} ${!openModal ? styles['isClosed'] : styles['isOpen']}`}>
      <Nav />
      <SummaryElements.SummaryContainer type={type}>
        <SummaryElements.SummaryHead orderID={orderID as string} tableType={tableType} onWaiting={onWaiting} type={type} />
        <section className={styles['item_container']}>
          <SummaryItem.OnQueuedItem onQueued={onQueued} tableID={tableID as string} />
          <SummaryItem.PackageItem isOpen={isOpen} packageContent={packageContent as string} />
          <SummaryItem.OpenTableItem isOpen={isOpen} tableHourCount={tableHourCount as string} />
        </section>
      </SummaryElements.SummaryContainer>
    </section>
  )
}

export default Summary