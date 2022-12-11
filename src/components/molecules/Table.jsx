import React from 'react'
import PropTypes from 'prop-types'
import { flexRender } from '@tanstack/react-table'

function Table({
  table
}) {
  console.log(table.getHeaderGroups())
  return (
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
  )
}

Table.propTypes = {
  table: PropTypes.object
}

export default Table