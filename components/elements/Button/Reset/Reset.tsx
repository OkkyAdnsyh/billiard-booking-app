import React from 'react';
import styles from '@/styles/components/elements/button.module.scss';

const Reset = ({content} : {content: string}) => {
  return (
    <button type='reset' className={styles.reset}>{content}</button>
  )
}

export default Reset