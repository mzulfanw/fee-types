import React from 'react'
import PropTypes from 'prop-types'
import { flexRender } from '@tanstack/react-table'

function Table({
  table
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
                background-color: #5E5E5E;
                color: #fff;
            }
          `
          }
        </style>
      }
      <div
        className='p-2'
      >
        <table>
          <thead>
            {
              table.getHeaderGroups().map(headerGroup => (
                <tr
                  key={headerGroup.id}
                >
                  {
                    headerGroup.headers.map(header => (
                      <th
                        key={header.id}
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
        </table>
      </div>
    </>
  )
}

Table.propTypes = {
  table: PropTypes.object
}

export default Table