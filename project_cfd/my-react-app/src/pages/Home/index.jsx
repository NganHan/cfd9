import React, { useEffect, useState } from 'react'
import Action from './Action'
import Banner from './Banner'
import CourseHome from './Course'
import Different from './Different'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
import './style.scss'

export default function Home() {

  return (
    <>
      <main className="homepage" id="main">
        <Banner />
        <CourseHome />
        <Different />
        <Testimonial />
        <Gallery />
        <Action />
      </main>
    </>
  )
}
