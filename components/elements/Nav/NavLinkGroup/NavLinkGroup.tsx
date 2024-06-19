import React from 'react';
import styles from '@/styles/components/elements/navElement.module.scss';

const NavLinkGroup = ({children, style} : {children: React.ReactNode, style: string}) => {
  return (
    <ul className={`${styles['navLink_group']} ${styles[style]}`}>
        {children}
    </ul>
  )
}

export default NavLinkGroup