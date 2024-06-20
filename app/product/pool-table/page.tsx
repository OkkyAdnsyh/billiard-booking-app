import PoolTableCard from '@/components/modules/Card/Product/PoolTableCard'
import { getTimeDiff } from '@/utils/helper/GetTimeDiff'
import { time } from 'console';
import React from 'react'

const PoolTablePage = async () => {
  // const res = await fetch('http://localhost:3000/api/v1/product/table', {
  //   method: 'POST'
  // }).then(res => res.json())

  // console.log(res);
  let timeDiff = getTimeDiff('06/20/2024 18:05:00');
  return (
    <>
      <PoolTableCard 
        tableNumber={1}
        productType='Reguler Table'
        isOpenTable={false}
        isOccupied={false}
        timeCount={timeDiff}
        playerID={null}
        bookingID={null}
      />
    </>
  )
}

export default PoolTablePage