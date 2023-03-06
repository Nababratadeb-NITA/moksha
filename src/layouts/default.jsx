import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Castle from '../assets/castle.svg'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

export default function DefaultLayout() {
  return (
    <div className='min-w-screen min-h-screen'>
      <img
        role="presentation"
        src={Castle}
        alt=''
        className='fixed w-screen h-screen object-cover'
        aria-hidden={true}
      />
      <span
        role="presentation"
        className='fixed w-screen h-screen z-10 bg-darkBrown/70 mix-blend-darken'
      />

      <div className='relative z-20'>
        <div>
          <ScrollToTop />
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}
