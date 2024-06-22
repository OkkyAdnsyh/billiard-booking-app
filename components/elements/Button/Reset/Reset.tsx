import React, { HTMLProps } from 'react';
import styles from '@/styles/components/elements/button.module.scss';

interface IReset extends HTMLProps<HTMLButtonElement>{
  content: string
}
const Reset = ({content, type, ...rest} : IReset) => {
  return (
    <button type="reset" className={styles.reset} {...rest}>{content}</button>
  )
}

export default Reset