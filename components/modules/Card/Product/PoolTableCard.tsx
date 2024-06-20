import React from 'react';
import { Assets } from '@/components/elements/Assets/Assets';
import { CardElements } from '@/components/elements/Card';
import { ProductElements } from '@/components/elements/Product';
import styles from '@/styles/components/modules/Card/Product/poolTableCard.module.scss';
import DefaultTIme from '@/components/modules/Time/DefaultTime/DefaultTime';
import Timer from '@/components/modules/Time/Timer/Timer';
import { TimeKeeper } from '@/components/elements/TimeKeeper/TimeKeeper';

type TPoolTableCard = {
    tableNumber: number,
    productType: string,
    isOpenTable: boolean,
    playerID: string | null,
    bookingID: string | null,
    timeCount: number | null,
    isOccupied: boolean
}

const PoolTableCard = ({tableNumber, productType, isOpenTable, isOccupied, timeCount, playerID, bookingID}: TPoolTableCard) => {
  return (
    <>
        <CardElements.CardContainer>
            <CardElements.CardTitle>
                <h3>Table {tableNumber}</h3>
            </CardElements.CardTitle>
            <CardElements.CardThumb src={Assets.Table} alt='Pool Table' />
            <CardElements.CardDesc>
              <section className={styles['tag_container']}>
                <ProductElements.ProductType productType={productType}/>
                {isOpenTable ? <ProductElements.ProductTag tag='Open Table' /> : ''}
              </section>
              <ProductElements.PoolTableStatus status={isOccupied} />
            </CardElements.CardDesc>
            <TimeKeeper playerID={playerID} label='player on table'>
              {!isOccupied && <DefaultTIme />}
              {isOccupied && !isOpenTable && <Timer count={timeCount as number} />}
            </TimeKeeper>
            <TimeKeeper playerID={bookingID} label='player on queued'>
              {!isOccupied && <DefaultTIme />}
              {isOccupied && !isOpenTable && <Timer count={timeCount as number} />}
            </TimeKeeper>
        </CardElements.CardContainer>
    </>
  )
}

export default PoolTableCard