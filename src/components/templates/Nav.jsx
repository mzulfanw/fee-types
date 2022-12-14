import React from 'react'
import {
  AiFillQuestionCircle,
  AiOutlineBell
} from 'react-icons/ai'

function Nav(props) {
  return (
    <div
      style={{
        position: 'absolute',
        maxWidth: '1318px',
        left: '134px',
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: '70px'
      }}
      {...props}
    >
      <div
        className='d-flex mt-3 justify-content-between '
      >
        <div className='w-75'>
          <h3>Bayu Buana Travel</h3>
        </div>
        <div className='align-self-end me-5'>
          <div className='d-flex align-items-center justify-content-round gap-3'>
            <div>
              <AiFillQuestionCircle
                size={30}
              />
            </div>
            <div>
              <AiOutlineBell
                size={30}
              />
            </div>
            <div
              className='h-25'
            >
              <img
                src='https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80'
                alt='person'
                style={{
                  height: '40px',
                  width: '40px',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav