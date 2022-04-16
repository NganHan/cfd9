import React, { useEffect, useState } from 'react'
import './style.scss'
import Head from '../../components/Head'
import Pattern from './Pattern'
import Category from './Category'
import Features from './Features'
import Picks from './Picks'
import Sellers from './Sellers'
import Coundown from './Countdown'
import Reviews from './Reviews'
import Brands from './Brands'

export default function Home() {

  return (
    <>
      <main className="homepage" id="main">
        <Head>
          <title>Home</title>
        </Head>
        <Pattern />
        <Category />
        <Features />
        <Picks />
        <Sellers />
        <Coundown />
        <Reviews />
        <Brands />
      </main>
    </>
  )
}
