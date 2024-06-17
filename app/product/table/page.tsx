import React from 'react';
import ProductCard from '@/components/modules/ProductCard/ProductCard';

const ProductTable = () => {
  return (
    <>
      <ProductCard product='Table' type='Product' title='Table 1' status={false} />
    </>
  )
}

export default ProductTable