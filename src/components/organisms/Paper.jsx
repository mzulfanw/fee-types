
import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Paper({
  children
}) {
  return (
    <Card
      className='w-100 shadow-sm'
    >
      <Card.Body
        className='p-5'
      >
        {children}
      </Card.Body>
    </Card>
  )
}

Paper.propTypes = {
  children: PropTypes.node
}

export default Paper