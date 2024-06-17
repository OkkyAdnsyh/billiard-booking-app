import React from 'react';
import ProductCard from '@/components/modules/ProductCard/ProductCard';

const ProductTable = async () => {
  const data = await fetch('http://localhost:3000/api/v1/product/table', {
    method: 'POST'
  }).then(res => res.json());

  console.log(data);
  
  return (
    <>
      <ProductCard product='Table' type='Product' title='Table 1' status={false} />
    </>
  )
}

export default ProductTable