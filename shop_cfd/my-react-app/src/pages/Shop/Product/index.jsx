import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <div className="row">
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
                        <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-5.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Shoes</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Leather mid-heel Sandals
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $129.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/img/products/product-121.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-6.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Dresses</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Cotton floral print Dress
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $40.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                        Sale
                    </div>
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/img/products/product-122.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-7.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Shoes</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to={SHOP_PATH}>
                                Leather Sneakers
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold">
                            <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                            <span className="text-primary">$85.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a href="#!">
                            <img className="card-img-top card-img-front" src="/img/products/product-8.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Tops</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Cropped cotton Top
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $29.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a href="#!">
                            <img className="card-img-top card-img-front" src="/img/products/product-9.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Dresses</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Floral print midi Dress
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $50.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                        Sale
                    </div>
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/img/products/product-123.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-10.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Bags</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Suede cross body Bag
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold">
                            <span className="font-size-xs text-gray-350 text-decoration-line-through">$79.00</span>
                            <span className="text-primary">$49.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/img/products/product-124.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/img/products/product-11.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Skirts</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <a className="text-body" href="product.html">
                                Printed A-line Skirt
                            </a>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $79.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                {/* Card */}
                <div className="card mb-7">
                    {/* Badge */}
                    <div className="badge badge-white card-badge card-badge text-uppercase">
                        New
                    </div>
                    {/* Image */}
                    <div className="card-img">
                        {/* Image */}
                        <a href="#!">
                            <img className="card-img-top card-img-front" src="/img/products/product-12.jpg" alt="..." />
                        </a>
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
                            <Link className="text-muted" to={SHOP_PATH}>Shoes</Link>
                        </div>
                        {/* Title */}
                        <div className="font-weight-bold">
                            <Link className="text-body" to={SHOP_PATH}>
                                Heel strappy Sandals
                            </Link>
                        </div>
                        {/* Price */}
                        <div className="font-weight-bold text-muted">
                            $90.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
