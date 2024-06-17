import React from 'react';
import styles from '@/styles/components/blocks/Product/table.module.scss';
import Background from '@/components/elements/Background/Background';
import Image from 'next/image';
import { Assets } from '@/components/elements/Assets/Assets';
import { ProductComponent } from '@/components/elements/Product/Product';
import CTA from '@/components/elements/CTA/CTA';

const Table = () => {
  return (
    <>
        <section className={styles.container}>
            <article className={styles['title_container']}>
                <h3>Easy Way To Book The Table</h3>
            </article>
            <section className={styles['product_container']}>
                <section className={`${styles.product} ${styles['col-span_3']}`}>
                    <Background customStyle={['img_bg', 'z-index_1']}>
                        <Image
                            src={Assets.RegulerImgBg}
                            alt='Reguler Table'
                        />
                    </Background>
                    <Background customStyle={['gradient_bg', 'left_to_right', 'z-index_2', 'product_table']}>
                        <article className={styles['product_body']}>
                            <h3 className={styles['product_title']}>reguler table</h3>
                            <p className={styles['product_desc']}>Reguler playing table best for beginner and professional</p>
                            <ProductComponent.ProductStatus type='Group' status={true} />
                            <section className={styles['product_footer']}>
                                <ProductComponent.ProductPrice nominal={35000} qty='hour' label='Price' />
                                <CTA type='Secondary' href={'/product/table'} status={true} />
                            </section>
                        </article>
                    </Background>
                </section>
                <section className={`${styles.product} ${styles['col-span_2']}`}>
                    <Background customStyle={['img_bg', 'z-index_1']}>
                        <Image
                            src={Assets.VipImgBg}
                            alt='VIP Table'
                        />
                    </Background>
                    <Background customStyle={['gradient_bg', 'left_to_right', 'z-index_2', 'product_table']}>
                        <article className={styles['product_body']}>
                            <h3 className={styles['product_title']}>VIP room</h3>
                            <p className={styles['product_desc']}>Private room to play with your friend and family</p>
                            <ProductComponent.ProductStatus type='Group' status={true} />
                            <section className={styles['product_footer']}>
                                <ProductComponent.ProductPrice nominal={55000} qty='hour' label='Price' />
                                <CTA type='Secondary' href={'/product/table'} status={true} />
                            </section>
                        </article>
                    </Background>
                </section>
                <section className={`${styles.product} ${styles['content_center']}`}>
                    <h3 className={styles['product_title']}>VIP room</h3>
                    <p className={styles['product_desc']}>Private room to play with your friend and family</p>
                    <ProductComponent.ProductStatus type='Group' status={true} />
                    <section className={styles['product_footer']}>
                        <ProductComponent.ProductPrice nominal={55000} qty='hour' label='Price' />
                        <CTA type='Secondary' href={'/product/table'} status={true} />
                    </section>
                </section>
            </section>
        </section>
    </>
  )
}

export default Table