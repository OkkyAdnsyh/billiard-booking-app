'use client';
import React from 'react';
import styles from '@/styles/components/elements/button.module.scss';

const ButtonLink = ({ClickHandler, children} : {ClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void, children: React.ReactNode}) => {
  return (
    <button className={styles['button_link']} type='button' onClick={ClickHandler}>{children}</button>
  )
}

export default ButtonLink