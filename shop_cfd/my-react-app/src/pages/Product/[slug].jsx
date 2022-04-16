import React from 'react'
import { useQuery } from '../../core'
import { productService } from '../../services/productService'
import Description from './Description'
import Features from './Features'
import Product from './Product'
import Products from './Products'
import Reviews from './Reviews'

export default function ProductPage() {
  const {data: products, loading} = useQuery(() => productService.getDetail())
  return (
    <div>
        {/* PRODUCT */}
        <Product />
        {/* DESCRIPTION */}
        <Description />
        {/* PRODUCTS */}
        <Products />
        {/* REVIEWS */}
        <Reviews />
        {/* FEATURES */}
        <Features />
    </div>
  )
}
