import React from 'react';
import styles from '@/styles/components/elements/select.module.scss';

interface IOption {
    option: string[],
    isOpen: boolean,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const Option = ({option, isOpen, onClick}: IOption) => {
  return (
    <section className={`${styles['option_container']} ${isOpen && styles.isOpen}`}>
        {option.map((option, index) => (
            <button key={`opt-${index}`} onClick={onClick} className={styles.option} type='button'>{option}</button>
        ))}
    </section>
  )
}

export default Option