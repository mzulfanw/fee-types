import React from 'react'
import { Breadcrumb as BSBreadcrumb } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function Breadcrumbs() {
  const loc = useLocation()
  const dynamicPath = loc.pathname.replace('/', ' ').replace('-', ' ')
  return (
    <>
      <style type='text/css'>
        {
          `.breadcrumb-item > a {
            text-decoration: none;
            color: #bfc0c0;
        }
          .breadcrumb-item.active {
            color: #ef8354;
        }

          .breadcrumb-item + .breadcrumb-item::before {
            content: ">";
        }
        `
        }
      </style>
      <BSBreadcrumb>
        <BSBreadcrumb.Item
          href='#'
        >
          Master Data Management
        </BSBreadcrumb.Item>
        <BSBreadcrumb.Item
          active={loc ? true : false}
        >
          {
            dynamicPath.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
          }
        </BSBreadcrumb.Item>
      </BSBreadcrumb>
    </>

  )
}

export default Breadcrumbs