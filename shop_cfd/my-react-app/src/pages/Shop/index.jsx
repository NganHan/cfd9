import React from 'react'
import Head from '../../components/Head'
import Filters from './Filters'
import Header from './Header'
import Product from './Product'
import Tags from './Tags'
import { SHOP_PATH, useQuery } from '../../core'
import { productService } from '../../services/productService'
import ProductCard, { ProductCardLoading } from '../../components/ProductCard'
import ListView from '../../components/ListView'
import Pagination from '../../components/Paginate'
import {useSearchParams, Link, useNavigate} from 'react-router-dom'
import { convertObjToQueryString, convertURLToObject } from '../../core/utils/url'
import { usePage, useQueryURL } from '../../core/hooks'
import styled from 'styled-components'
import SliderShop from './Slider'
const SearchP = styled.p`
  font-size: 25px;
`

export default function Shop() {
  const page = usePage()
  const queryObj = useQueryURL()
  const navigate = useNavigate()
  const queryString = convertObjToQueryString({
    name: queryObj.q,
    page,
    sort: queryObj.sort
  })

  const {data: products, loading: productLoading, paginate} = useQuery(() => productService.getProduct(queryString), [queryString])
  
  const onChangeSort = (value) => {
    queryObj.sort = value
    queryObj.page = undefined
    const queryString = convertObjToQueryString(queryObj)
    navigate(SHOP_PATH + queryString)
  }
  
  return (
    <>
        <Head>
          <title>Shop</title>
        </Head>
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <Filters />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <SliderShop />
                        {/* Header */}
                        <Header onChangeSort = {onChangeSort} queryObj={queryObj}/>
                        {/* Tags */}
                        <Tags />
                        {/* Products */}
                        {queryObj.q && <SearchP>
                          Kết quả tìm kiếm cho '{queryObj.q}'
                        </SearchP>}
                        
                        <div className="row">
                          {/* {
                            productLoading ? [...Array(15)].map((_,i) => <ProductCardLoading key={i}/>)
                            : products.data?.map(e => <ProductCard key={e.id} {...e}/>)
                          } */}
                          <ListView 
                            LoadingComponent = {ProductCardLoading}
                            isLoading = {productLoading}
                            items = {products}
                            render = {e => <ProductCard key={e.id} {...e}/>}
                            loadingCount = {15}
                          />
                        </div>
                        {/* Pagination */}
                        {/* <Pagination /> */}
                        <Pagination totalPage={paginate?.totalPage}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
