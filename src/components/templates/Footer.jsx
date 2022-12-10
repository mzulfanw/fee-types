import React from 'react'

function Footer() {
  return (
    <div
      className='pt-2 pb-2'
    >
      <footer
        className='d-flex justify-content-between'
      >
        <p className='fs-6 fw-light'>
          &copy; Copyright {new Date().getFullYear()} Bayu Buana Travel Services. All Rights Reserved.
        </p>
        <p className='fs-6 fw-light'>BB-010-P1</p>
      </footer>
    </div>
  )
}

export default Footer