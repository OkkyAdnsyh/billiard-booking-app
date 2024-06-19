import React from 'react';
import styles from '@/styles/components/elements/navElement.module.scss';

const NavContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <nav className={styles.container}>
        {children}
    </nav>
  )
}

export default NavContainer