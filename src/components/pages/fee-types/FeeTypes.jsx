import React from 'react'
import FeeTypesToolbar from './FeeTypesToolbar'
import PropTypes from 'prop-types'
import {
  createColumnHelper,
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
    header: 'Description'
  }),
  columnHelper.accessor('status', {
    header: 'Status'
  }),
  columnHelper.accessor('actions', {
    header: 'Actions'
  })
]
function FeeTypes({
  data
}) {
  const table = useReactTable({
    data: data,
    columns
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