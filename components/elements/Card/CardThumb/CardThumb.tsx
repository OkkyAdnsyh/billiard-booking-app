import React from 'react';
import styles from '@/styles/components/elements/cardElement.module.scss';
import Image, { ImageProps } from 'next/image';

const CardThumb = ({...rest} : ImageProps) => {
  return (
    <section className={styles['thumb_container']}>
        <Image className={styles.thumb} {...rest} />
    </section>
  )
}

export default CardThumb