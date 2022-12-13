import React from 'react'
import PropTypes from 'prop-types'
import { flexRender } from '@tanstack/react-table'

function Table({
  table,
  children
}) {
  return (
    <>
      {
        <style type='text/css'>
          {
            `
            table {
              font-family: 'Nunito', sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            td,
            th {
                
                text-align: left;
                padding: 8px;
                // background-color: #5E5E5E;
                color: #fff;
            }
              tr:nth-child(even) {
              background-color: #dddddd;
            }
          `
          }
        </style>
      }
      <div
        className='p-2'
      >
        <table>
          <thead style={{ backgroundColor: '#5E5E5E' }}>
            {
              table.getHeaderGroups().map(headerGroup => (
                <tr
                  key={headerGroup.id}
                >
                  {
                    headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        style={{ width: header.getSize() }}
                      >
                        {
                          header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </>
  )
}

Table.propTypes = {
  table: PropTypes.object,
  children: PropTypes.node
}

export default Table