import { Assets } from '@/components/elements/Assets/Assets'
import { Card, CardComponent } from '@/components/elements/Card/Card'
import { ProductComponent } from '@/components/elements/Product/Product'
import { TimeKeeper } from '@/components/elements/TimeKeeper/TimeKeeper'
import Timer from '@/components/elements/TimeKeeper/Timer/Timer'
import React from 'react'

type TProductCard = {
    product: 'Table' | 'FnB',
    type: 'Product' | 'Order',
    title: string,
    status: boolean
}

const ProductCard = ({product, type, title, status} : TProductCard) => {
    if(product === 'Table') return (
        <Card type={type}>
            <CardComponent.CardHead>
                <CardComponent.CardTitle content={title} />
                <CardComponent.CardThumb src={Assets.Table} alt='Pool Table' priority/>
            </CardComponent.CardHead>
            <CardComponent.CardBody type={type}>
                <ProductComponent.ProductStatus type='Single' productType='Table' status={status} />
                <TimeKeeper timerType='Timer' time={'6:27:14'} label='is playing'/>
            </CardComponent.CardBody>
        </Card>
    )
}

export default ProductCard