import React from 'react';
import styles from '@/styles/components/elements/form.module.scss';

const Form = ({children} : {children: React.ReactNode}) => {
  return (
    <form className={styles.container}>
        {children}
    </form>
  )
}

export default Form