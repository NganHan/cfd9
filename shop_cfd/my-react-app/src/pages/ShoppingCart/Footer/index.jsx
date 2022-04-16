import React from 'react'

export default function Footer() {
    return (
        <div className="row align-items-end justify-content-between mb-10 mb-md-0">
            <div className="col-12 col-md-7">
                {/* Coupon */}
                <form className="mb-7 mb-md-0">
                    <label className="font-size-sm font-weight-bold" htmlFor="cartCouponCode">
                        Coupon code:
                    </label>
                    <div className="row form-row">
                        <div className="col">
                            {/* Input */}
                            <input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*" />
                        </div>
                        <div className="col-auto">
                            {/* Button */}
                            <button className="btn btn-sm btn-dark" type="submit">
                                Apply
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-12 col-md-auto">
                {/* Button */}
                <button className="btn btn-sm btn-outline-dark">Update Cart</button>
            </div>
        </div>
    )
}
