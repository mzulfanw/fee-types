import React from 'react'
import { Button as BSButton } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Button({
  variant,
  type = 'button',
  text,
  disabled = false,
  size = 'sm',
  onClick = () => { },
  ...other
}) {
  return (
    <BSButton
      variant={variant}
      type={type}
      disabled={disabled}
      size={size}
      onClick={onClick}
      {...other}
    >
      {text}
    </BSButton>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func
}

export default Button