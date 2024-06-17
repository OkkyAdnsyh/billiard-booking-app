import React from 'react';
import styles from '@/styles/components/elements/card.module.scss';
import Image, { ImageProps } from 'next/image';

const CardThumb = ({...rest}: ImageProps) => {
  return (
    <section className={styles.thumb}>
        <Image {...rest} />
    </section>
  )
}

export default CardThumb