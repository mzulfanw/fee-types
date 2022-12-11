/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '@/components/templates/Nav'
import Sidebar from '@/components/templates/Sidebar'
import PropTypes from 'prop-types'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '@/components/molecules/Breadcrumbs'

const sidebarStyle = {
  height: '100vh',
  backgroundColor: '#027f71',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  textAlign: 'center'
}

const mainStyle = {
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto'
}

function Layout({
  children
}) {
  return (
    <div
      className='row'
    >
      <Sidebar
        sx={sidebarStyle}
      />
      {/* <Nav
      className='col-auto'
      /> */}
      <Container
        className='col-9'
        style={mainStyle}
      // style={mainStyle}
      >
        <main
          className='mt-5'
        // style={mainStyle}
        >
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
      </Container>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout