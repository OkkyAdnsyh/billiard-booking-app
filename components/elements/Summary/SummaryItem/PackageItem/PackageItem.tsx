import React from 'react';
import styles from '@/styles/components/elements/summaryElement.module.scss';

const PackageItem = ({isOpen, packageContent} : {isOpen: boolean, packageContent: string}) => {
  return (
    <section className={styles.item}>
        <p className={styles.label}>Package</p>
        <p className={styles.content}>
            {!isOpen ? packageContent : 'No'}
        </p>
    </section>
  )
}

export default PackageItem