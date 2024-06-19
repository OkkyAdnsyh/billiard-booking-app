'use client';

import Link, { LinkProps } from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/components/elements/nav.module.scss';

interface INavLink extends LinkProps{
    children : React.ReactNode,
    tooltip : string, 
}
const NavLink = ({children, tooltip, ...rest} : INavLink) => {
    const [isHover, setHoverState] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setHoverState(!isHover);
    }
    const handleMouseLeave = () => {
        setHoverState(!isHover);
    }
  return (
    <li>
        <Link
            {...rest}
            className={styles['link_container']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <p className={`${styles['link_tooltip']} ${isHover ? styles.isShow : ''}`}>
                {tooltip}
            </p>
        </Link>
    </li>
  )
}

export default NavLink