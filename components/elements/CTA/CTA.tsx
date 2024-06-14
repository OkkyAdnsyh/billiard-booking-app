import Link, { LinkProps } from 'next/link';
import React from 'react';
import styles from '@/styles/components/elements/cta.module.scss';

interface ICTA extends LinkProps {
  type: 'Main' | 'Secondary',
  parentStyle?: string,
  content: string
}

const CTA = ({type, content, parentStyle, ...rest}: ICTA) => {
  if(type === 'Main') return (
    <>
      <Link
        className={`${styles['main_container']} ${parentStyle}`}
        {...rest}
      >
        <section className={styles['main_content_container']}>
          <p className={styles.content}>
            {content}
          </p>
        </section>
        <div className={styles['arrow_container']}>
          <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7071 8.20711C24.0976 7.81658 24.0976 7.18342 23.7071 6.79289L17.3431 0.428932C16.9526 0.0384079 16.3195 0.0384079 15.9289 0.428932C15.5384 0.819456 15.5384 1.45262 15.9289 1.84315L21.5858 7.5L15.9289 13.1569C15.5384 13.5474 15.5384 14.1805 15.9289 14.5711C16.3195 14.9616 16.9526 14.9616 17.3431 14.5711L23.7071 8.20711ZM0 8.5H23V6.5H0V8.5Z" fill="#E7F3FF"/>
          </svg>
        </div>
      </Link>
    </>
  )
}

export default CTA