import styles from '@/styles/components/elements/nav.module.scss';
import NavLink from './NavLink/NavLink';

export const Nav = ({children, style} : {children: React.ReactNode, style: string}) => {
    return (
        <>
            <header className={`${styles.wrapper} ${styles[style]}`}>
                <nav className={`${styles.container} ${styles[style]}`}>
                    {children}
                </nav>
            </header>
        </>
    )
}

export const NavComponent = {NavLink}