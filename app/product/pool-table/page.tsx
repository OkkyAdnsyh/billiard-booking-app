import React from 'react';
import PoolTableCard from '@/components/modules/Card/Product/PoolTableCard';
import { getTimeDiff } from '@/utils/helper/GetTimeDiff';
import { TPoolTableCard } from '@/lib/Type/type';

const PoolTablePage = async () => {
  // const res = await fetch('http://localhost:3000/api/v1/product/table', {
  //   method: 'POST'
  // }).then(res => res.json())

  // console.log(res);

  let timeDiff = getTimeDiff('06/20/2024 18:05:00');
  return (
    <>
      {/* {res.map((item: TPoolTableCard, index: number) => {
        return(
          <PoolTableCard
            key={`table-${index}`}
            tableNumber={index + 1}
            isOpenTable={item.playerID === null ? false : true}
            isOccupied={item.playerID === null ? false : true}
            bookingID={item.bookingID}
            playerID={item.playerID}
            productType={item.productType}
            timeCount={null}
          />
        )
      })} */}
    </>
  )
}

export default PoolTablePage