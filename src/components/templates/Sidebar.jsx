import React from 'react'
import PropTypes from 'prop-types'
import { sidebarItem } from '@/settings/sidebar'

function Sidebar({
  sx
}) {
  return (
    <div
      className='col-2'
      style={sx}
    >
      {
        sidebarItem?.map((item, index) => (
          <div
            key={index}
            className='pt-5'
          >
            <div>
              {item.icon}
            </div>
          </div>
        ))
      }
    </div>
  )
}

Sidebar.propTypes = {
  sx: PropTypes.object
}

export default Sidebar