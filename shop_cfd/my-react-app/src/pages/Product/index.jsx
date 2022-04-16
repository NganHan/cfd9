import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '../../core'
import { productService } from '../../services/productService'
import Description from './Description'
import Features from './Features'
import Product from './Product'
import Products from './Products'
import Reviews from './Reviews'

export default function ProductPage() {
  const [detail, setDetail] = useState({})
  const {slug} = useParams()
  const navigate = useNavigate()
  const getProductDetail = async() => {
    const res = await productService.getDetail(slug)
    console.log(res?.data);
    if(res?.data){
      setDetail(res.data)
    } 
  }
  useEffect(() => {getProductDetail()}, [])
  console.log('detail', detail[0]);
  return (
    <div>
        {/* PRODUCT */}
        <Product product={detail[0]}/>
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
