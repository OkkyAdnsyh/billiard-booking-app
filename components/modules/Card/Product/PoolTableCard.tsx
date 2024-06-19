import { Assets } from '@/components/elements/Assets/Assets'
import { CardElements } from '@/components/elements/Card'
import React from 'react'

type IPoolTableCard = {
    tableNumber: number
}

const PoolTableCard = ({tableNumber} : {tableNumber: number}) => {
  return (
    <>
        <CardElements.CardContainer>
            <CardElements.CardTitle>
                <h3>Table {tableNumber}</h3>
            </CardElements.CardTitle>
            <CardElements.CardThumb src={Assets.Table} alt='Pool Table' />
        </CardElements.CardContainer>
    </>
  )
}

export default PoolTableCard