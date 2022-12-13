import React from 'react'
import FeeTypesToolbar from './FeeTypesToolbar'
import PropTypes from 'prop-types'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import FeeTypesTable from './FeeTypesTable'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('feetypecode', {
    header: 'Fee Type Code'
  }),
  columnHelper.accessor('feetypename', {
    header: 'Fee Type Name'
  }),
  columnHelper.accessor('desc', {
    header: 'Description',
    size: 200
  }),
  columnHelper.accessor('status', {
    header: 'Status'
  }),
  columnHelper.accessor('actions', {
    header: 'Actions',
    size: 80
  })
]
function FeeTypes({
  data
}) {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div>
      <h3>Fee Type</h3>
      <FeeTypesToolbar />
      <FeeTypesTable
        table={table}
      />
    </div>
  )
}

FeeTypes.propTypes = {
  data: PropTypes.array
}

export default FeeTypes