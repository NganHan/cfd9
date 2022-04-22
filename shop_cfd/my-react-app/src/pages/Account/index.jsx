import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import {ACCOUNT_WISHLIST_PATH, ACCOUNT_PATH, AUTH, LOGOUT_PATH, ACCOUNT_ORDERS_PATH, PERSONAL_INFO_PATH, ACCOUNT_ADDRESS_PATH, ACCOUNT_PAYMENT_PATH} from '../../core/constants/path'
import { actionLogout } from '../../stores/auth'

export default function Account() {
  const {user} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (ev) => {
    // console.log('user', user);
    ev.preventDefault()
    dispatch(actionLogout())
    navigate(AUTH)
  }
  return (
    <>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <Link className="list-group-item list-group-item-action dropright-toggle active" to={ACCOUNT_ORDERS_PATH}>
                    Orders
                  </Link>
                  <Link className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_WISHLIST_PATH}>
                    Widhlist
                  </Link>
                  <Link className="list-group-item list-group-item-action dropright-toggle " to={PERSONAL_INFO_PATH}>
                    Personal Info
                  </Link>
                  <Link className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_ADDRESS_PATH}>
                    Addresses
                  </Link>
                  <Link className="list-group-item list-group-item-action dropright-toggle " to={ACCOUNT_PAYMENT_PATH}>
                    Payment Methods
                  </Link>
                  <a onClick={handleLogout} className="list-group-item list-group-item-action dropright-toggle">
                    Logout
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
