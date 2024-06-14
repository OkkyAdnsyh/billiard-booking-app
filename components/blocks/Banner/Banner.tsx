import React from 'react';
import { Assets } from '@/components/elements/Assets/Assets';
import styles from '@/styles/components/blocks/banner.module.scss';
import Background from '@/components/elements/Background/Background';
import Image from 'next/image';
import CTA from '@/components/elements/CTA/CTA';

const Banner = () => {
  return (
    <>
        <section className={styles.container}>
            <Background
                customStyle={['z-index_1', 'img_bg']}
            >
                <Image
                    src={Assets.MainBg}
                    alt='Billard Table'
                />
            </Background>
            <Background
                customStyle={['z-index_2', 'gradient_bg', 'top_to_bottom', 'banner']}
            >
                <section className={styles['logo_container']}>
                    <section className={styles.logo}>
                        <Image
                            src={Assets.Logo}
                            alt='logo'
                        />
                    </section>
                    <h1>Billiard</h1>
                </section>
                <section className={styles['tagline_container']}>
                    <h2 id='tagline-1' className={styles.tagline}>Play</h2>
                    <section id='ballDecor-1' className={styles['ball__decor']}>
                        <Image
                            src={Assets.BallDecor6}
                            alt='Ball 6'
                        />
                    </section>
                    <h2 id='tagline-2' className={styles.tagline}>Compete</h2>
                    <section id='ballDecor-2' className={styles['ball__decor']}>
                        <Image
                            src={Assets.BallDecor1}
                            alt='Ball 1'
                        />
                    </section>
                    <h2 id='tagline-3' className={styles.tagline}>Eat</h2>
                </section>
                <article className={styles['desc_container']}>
                    <p>Spend your time with family and friend, in exquisite experiences of 8 - Ball Pool</p>
                </article>
                <CTA 
                    type='Main'
                    content='Book Table'
                    href={'/product/table'}
                    parentStyle={styles.cta}
                />
            </Background>
        </section>
    </>
  )
}

export default Banner