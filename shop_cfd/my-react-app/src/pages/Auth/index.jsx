import React from 'react'
import NewCustomer from './NewCustomer'
import ReturningCustomer from './ReturningCustomer'

export default function Auth() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <ReturningCustomer />
                    <NewCustomer />
                </div>
            </div>
        </section>
    )
}
