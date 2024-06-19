import React from 'react';
import styles from '@/styles/components/elements/summaryElement.module.scss';

const SummaryContainer = ({type, children} : {type: 'Modal' | 'Page', children: React.ReactNode}) => {
  return (
    <section className={`${styles.container} ${type === 'Modal' ? styles['container_modal'] : styles['container_page']}`}>
        {children}
    </section>
  )
}

export default SummaryContainer