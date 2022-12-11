import React from 'react'
import PropTypes from 'prop-types'
import Table from '@/components/molecules/Table'

function FeeTypesTable({
  table
}) {
  return (
    <Table
      table={table}
    />
  )
}

FeeTypesTable.propTypes = {
  table: PropTypes.object
}

export default FeeTypesTable