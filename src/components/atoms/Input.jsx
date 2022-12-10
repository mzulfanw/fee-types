import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Input({
  type = 'text',
  placeholder = '',
  name,
  value,
  onChange = () => { }
}) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      title='lanjut'
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input