import React from 'react'
import { Skeleton } from '@mui/material';
import { currency } from '../../core/utils/number';
import { generatePath, Link, useParams } from 'react-router-dom';
import { PRODUCT } from '../../core';

export const ProductCardLoading = ({name, real_price, images}) => {
    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Skeleton variant="rectangular" width={'100%'} height={200}/>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Skeleton />
                        <Link className="text-body" to={PRODUCT}>
                        {name}
                        </Link>
                    </div>
                    {/* Price */}
                    {/* <div className="font-weight-bold text-muted">
                        <Skeleton />
                        $129.00
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default function ProductCard({name, real_price, images, slug}) {
    const detailPath = generatePath(PRODUCT, {slug})

    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Link className="card-img-hover" to={detailPath}>
                        <img className="card-img-top card-img-back" src={images?.[0]?.thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={images?.[1]?.thumbnail_url || images?.[0]?.thumbnail_url} alt="..." />
                    </Link>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Link className="text-body" to={detailPath}>
                            {name}
                        </Link>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {/* $129.00 */}
                        {currency(real_price)}
                    </div>
                </div>
            </div>
        </div>
    )
}

