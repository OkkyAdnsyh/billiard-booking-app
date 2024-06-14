import React from 'react';
import styles from '@/styles/components/elements/background.module.scss';

type TBackground = {
    customStyle? : string[],
    children? : React.ReactNode
}

const Background = ({customStyle, children} : TBackground) => {
    return (
        <>
            <section 
                className={`${styles.container} ${customStyle?.map(style => styles[style]).join(' ')}`}>
                    {children}
            </section>
        </>
    )
}

export default Background