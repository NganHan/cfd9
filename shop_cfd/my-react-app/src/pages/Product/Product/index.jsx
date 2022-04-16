import React from 'react'
import Slider from '../../../components/Slider';
import SliderWithThumb from '../../../components/SliderWithThumb';
import { currency } from '../../../core/utils/number';

export default function Product({ product }) {
    console.log('chi tiet', product?.images[0]);
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                {/* Card */}
                                <div className="card">
                                    {/* Badge */}
                                    <div className="badge badge-primary card-badge text-uppercase">
                                        Sale
                                    </div>
                                    {/* Slider */}
                                    <div className="mb-4">

                                        <SliderWithThumb
                                        >
                                            {
                                                product?.images?.map((image, index) => (
                                                    // <a href="/img/products/product-7.jpg" data-fancybox key={index}>
                                                    //     <img src="/img/products/product-7.jpg" alt="..." className="card-img-top" />
                                                    // </a>
                                                    <img
                                                        key={index}
                                                        className="swiper-lazy"
                                                        src={image?.base_url}
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                ))
                                            }

                                        </SliderWithThumb>
                                    </div>
                                </div>
                                {/* Slider */}
                                {/* <div className="mx-n2 mb-10 mb-md-0">
                                    <SliderWithThumb

                                    >
                                        {
                                            product?.images?.map((image, index) => (
                                                // <a href="/img/products/product-7.jpg" data-fancybox key={index}>
                                                //     <img src="/img/products/product-7.jpg" alt="..." className="card-img-top" />
                                                // </a>
                                                <img
                                                    key={index}
                                                    className="swiper-lazy"
                                                    src={image?.base_url}
                                                    style={{ maxWidth: '100px' }}
                                                />
                                            ))
                                        }
                                    </SliderWithThumb>
                                </div> */}
                            </div>
                            <div className="col-12 col-md-6 pl-lg-10">
                                {/* Header */}
                                <div className="row mb-1">
                                    <div className="col">
                                        {/* Preheading */}
                                        {
                                            product?.brand_name && <a className="text-muted" href="shop.html">{product?.brand_name}</a>
                                        }
                                    </div>
                                    <div className="col-auto">
                                        {/* Rating */}
                                        <div className="rating font-size-xs text-dark" data-value={4}>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <a className="font-size-sm text-reset ml-2" href="#reviews">
                                            Reviews (6)
                                        </a>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h3 className="mb-2">{product?.name}</h3>
                                {/* Price */}
                                <div className="mb-7">
                                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{currency(product?.price)}</span>
                                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{currency(product?.real_price)}</span>
                                    <span className="font-size-sm ml-1">(In Stock)</span>
                                </div>
                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        {/* Label */}
                                        <p className="mb-5">
                                            Color: <strong id="colorCaption">White</strong>
                                        </p>
                                        {/* Radio */}
                                        <div className="mb-8 ml-n1">
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                <label className="custom-control-label" htmlFor="imgRadioOne">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                                                </label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-img">
                                                <input type="radio" className="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="Black" />
                                                <label className="custom-control-label" htmlFor="imgRadioTwo">
                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-49.jpg)' }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        {/* Label */}
                                        <p className="mb-5">
                                            Size: <strong><span id="sizeCaption">7.5</span> US</strong>
                                        </p>
                                        {/* Radio */}
                                        <div className="mb-2">
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioOne" defaultValue={6} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioOne">6</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="sizeRadioTwo">6.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThree" defaultValue={7} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioThree">7</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFour" defaultValue="7.5" data-toggle="form-caption" data-target="#sizeCaption" defaultChecked />
                                                <label className="custom-control-label" htmlFor="sizeRadioFour">7.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFive" defaultValue={8} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioFive">8</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSix" defaultValue="8.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioSix">8.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSeven" defaultValue={9} data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="sizeRadioSeven">9</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEight" defaultValue="9.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                <label className="custom-control-label" htmlFor="sizeRadioEight">9.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioNine" defaultValue={10} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioNine">10</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTen" defaultValue="10.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioTen">10.5</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEleven" defaultValue={11} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioEleven">11</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwelve" defaultValue={12} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioTwelve">12</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThirteen" defaultValue={13} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioThirteen">13</label>
                                            </div>
                                            <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFourteen" defaultValue={14} data-toggle="form-caption" data-target="#sizeCaption" />
                                                <label className="custom-control-label" htmlFor="sizeRadioFourteen">14</label>
                                            </div>
                                        </div>
                                        {/* Size chart */}
                                        <p className="mb-8">
                                            <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" /> <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size
                                                chart</a>
                                        </p>
                                        <div className="form-row mb-7">
                                            <div className="col-12 col-lg-auto">
                                                {/* Quantity */}
                                                <select className="custom-select mb-2">
                                                    <option value={1} selected>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-lg">
                                                {/* Submit */}
                                                <button type="submit" className="btn btn-block btn-dark mb-2">
                                                    Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                                </button>
                                            </div>
                                            <div className="col-12 col-lg-auto">
                                                {/* Wishlist */}
                                                <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                    Wishlist <i className="fe fe-heart ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <p>
                                            <span className="text-gray-500">Is your size/color sold out?</span>
                                            <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the
                                                Wait List!</a>
                                        </p>
                                        {/* Share */}
                                        <p className="mb-0">
                                            <span className="mr-4">Share:</span>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
