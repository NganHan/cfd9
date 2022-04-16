import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../../../components/Slider'
import { SHOP_PATH } from '../../../core'

export default function SliderShop() {
    return (
        <Slider>
            <div className="w-100">
                <div className="card bg-h-100 bg-left" style={{ backgroundImage: 'url(/img/covers/cover-24.jpg)' }}>
                    <div className="row" style={{ minHeight: '400px' }}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                            <div className="card-body px-md-10 py-11">
                            
                                <h4>
                                    2019 Summer Collection
                                </h4>
                                
                                <Link className="btn btn-link px-0 text-body" to={SHOP_PATH}>
                                    View Collection <i className="fe fe-arrow-right ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-16.jpg)' }} />
                    </div>
                </div>
            </div>
            <div className="w-100">
                <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-29.jpg)' }}>
                    <div className="row align-items-center" style={{ minHeight: '400px' }}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            <div className="card-body px-md-10 py-11">
                            
                                <h4 className="mb-5">Get -50% from Summer Collection</h4>

                                <p className="mb-7">
                                    Appear, dry there darkness they're seas. <br />
                                    <strong className="text-primary">Use code 4GF5SD</strong>
                                </p>
                                
                                <Link className="btn btn-outline-dark" to={SHOP_PATH}>
                                    Shop Now <i className="fe fe-arrow-right ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100">
                <div className="card bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-30.jpg)' }}>
                    <div className="row align-items-center" style={{ minHeight: '400px' }}>
                        <div className="col-12">
                            <div className="card-body px-md-10 py-11 text-center text-white">
            
                                <p className="text-uppercase">Enjoy an extra</p>
                            
                                <h1 className="display-4 text-uppercase">50% off</h1>
        
                                <Link className="link-underline text-reset" to={SHOP_PATH}>Shop Collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
