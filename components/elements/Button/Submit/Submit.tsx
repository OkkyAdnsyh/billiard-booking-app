import React from 'react';
import styles from '@/styles/components/elements/button.module.scss';

const Submit = ({content} : {content: string}) => {
  return (
    <button type='submit' className={styles.submit}>{content}</button>
  )
}

export default Submit