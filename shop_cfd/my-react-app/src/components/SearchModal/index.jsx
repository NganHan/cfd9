import React, { useState } from 'react'
import { Drawer } from 'antd';
import {Skeleton} from '@mui/material'
import { useQueryURL } from '../../core/hooks';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { PRODUCT, SHOP_PATH } from '../../core';
import { productService } from '../../services/productService';
import { currency } from '../../core/utils/number';
import ListView from '../ListView';


export default function SearchModal({visible, onClose}) {
    const queryObj = useQueryURL()
    const [value, setValue] = useState(queryObj.q || '')
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const onSearchChange = (ev) => {
        ev.preventDefault()
        setValue(ev.target.value)
    }
    const onKeyUp = async(ev) => {
        // ev.preventDefault()
        if(ev.key === 'Enter'){
            setIsLoading(true)
            const product = await productService.getProduct(`?name=${value}&limit=5`)
            setProduct(product.data)
            setIsLoading(false)
        }
    }
    const onHandleSearch = async(ev) => {
        // ev.preventDefault()
        setIsLoading(true)
        const product = await productService.getProduct(`?name=${value}&limit=5`)
        setProduct(product.data)
        setIsLoading(false)
    }


    return (
        <Drawer
            visible= {visible}
            closeIcon={null}
            headerStyle={{display: 'none'}}
            bodyStyle={{padding:0}}
            width={470}
            onClose={onClose}
        >
            <div id="modalSearch">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" onClick={onClose}>
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Search Products</strong>
                        </div>
                        {/* Body: Form */}
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                                    <select className="custom-select" id="modalSearchCategories">
                                        <option selected>All Categories</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                        <option>Kids</option>
                                    </select>
                                </div>



                                <div className="input-group input-group-merge">
                                    <input value={value} onChange={onSearchChange} onKeyUp={onKeyUp} className="form-control" type="search" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-border" onClick={onHandleSearch} type="submit">
                                            <i className="fe fe-search" />
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </div>
                        {/* Body: Results (add `.d-none` to disable it) */}
                        <div className="modal-body border-top font-size-sm">
                            {/* Heading */}
                            <p>Search Results:</p>
                            {/* Items */}
                            {/* {
                                product.map(e => <SearchItem key={e._id} {...e}/>)
                            } */}
                            <ListView 
                                items={product}
                                loadingCount={5}
                                LoadingComponent = {SearchItemLoading}
                                isLoading={isLoading}
                                render={e => <SearchItem key={e._id} {...e}/>}
                            />
                            {
                                product.length === 0 && <p>Khong co san pham nao nhu ban tim kiem</p>
                            }
                            {/* Button */}
                            <Link className="btn btn-link px-0 text-reset" to={SHOP_PATH + '?q=' +value} onClick={onClose}>
                                View All <i className="fe fe-arrow-right ml-2" />
                            </Link>
                        </div>
                        {/* Body: Empty (remove `.d-none` to disable it) */}
                        <div className="d-none modal-body">
                            {/* Text */}
                            <p className="mb-3 font-size-sm text-center">
                                Nothing matches your search
                            </p>
                            <p className="mb-0 font-size-sm text-center">
                                😞
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

const SearchItemLoading = () => {
    return(
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <Skeleton width={80} height={80}/>
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <Skeleton height={43} variant="text"/>
                    <Skeleton width="30%" height={20} variant="text"/>
                </p>
            </div>
        </div>
    )
}

const SearchItem = ({name, real_price, price, thumbnail_url, slug}) => {
    return(
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={thumbnail_url} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <Link className="stretched-link text-body" to={generatePath(PRODUCT, {slug})}>{name}</Link> <br />
                    <span className="text-muted">{currency(real_price)}</span>
                </p>
            </div>
        </div>
    )
}