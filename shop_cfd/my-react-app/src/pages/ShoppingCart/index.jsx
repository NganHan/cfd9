import React from 'react'
import Head from '../../components/Head'
import Footer from './Footer'
import ListGroup from './ListGroup'

export default function ShoppingCart() {
    return (
        <>
            <Head>
                <title>Shopping Cart</title>
            </Head>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Shopping Cart</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            {/* List group */}
                            <ListGroup />
                            {/* Footer */}
                            <Footer />
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Total */}
                            <div className="card mb-7 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span> <span className="ml-auto font-size-sm">$89.00</span>
                                        </li>
                                        <li className="list-group-item font-size-sm text-center text-gray-500">
                                            Shipping cost calculated at Checkout *
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Button */}
                            <a className="btn btn-block btn-dark mb-2" href="checkout.html">Proceed to Checkout</a>
                            {/* Link */}
                            <a className="btn btn-link btn-sm px-0 text-body" href="shop.html">
                                <i className="fe fe-arrow-left mr-2" /> Continue Shopping
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
