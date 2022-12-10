import React from 'react'
import PropTypes from 'prop-types'

function Icon({
  path,
  classes,
  maxWidth,
  ...others
}) {
  return (
    <img
      className={classes}
      src={path}
      alt='icon'
      style={{
        width: '100%',
        maxWidth: maxWidth || '48px',
        height: 'auto'
      }}
      {...others}
    />
  )
}

Icon.propTypes = {
  path: PropTypes.any,
  classes: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Icon