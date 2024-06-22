import React, { HTMLProps } from 'react';
import styles from '@/styles/components/elements/form.module.scss';

interface IForm extends HTMLProps<HTMLFormElement>{
  children: React.ReactNode
}
const Form = ({children, ...rest}: IForm) => {
  return (
    <form className={styles.wrapper} {...rest}>
        {children}
    </form>
  )
}

export default Form