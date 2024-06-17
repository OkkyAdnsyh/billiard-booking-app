import styles from '@/styles/components/elements/nav.module.scss';
import NavLink from './NavLink/NavLink';

export const Nav = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <header className={styles.wrapper}>
                <nav className={`${styles.container}`}>
                    {children}
                </nav>
            </header>
        </>
    )
}

export const NavComponent = {NavLink}