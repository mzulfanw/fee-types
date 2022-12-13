import React from 'react'
import PropTypes from 'prop-types'
import Table from '@/components/molecules/Table'
import { dummy } from '@/settings/dummy'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'

function FeeTypesTable({
  table
}) {
  return (
    <Table
      table={table}
      total={dummy}
    >
      {
        dummy?.map((val, index) => (
          <tr key={index} >
            <td className='text-dark'>{val.id}</td>
            <td className='text-dark'>{val.feeType}</td>
            <td className='text-dark'>{val.desc}</td>
            <td className='text-dark '>{val.status === 1 ? 'Active' : 'Not Active'}</td>
            <td className='text-dark'>
              <Row>
                <Col>
                  <FiEdit
                    size={20}
                    style={{
                      color: '#3f40ae'
                      , cursor: 'pointer'
                    }}
                  />
                </Col>
                <Col>
                  <AiOutlineEye
                    size={22}
                    style={{
                      color: '#3f40ae'
                      , cursor: 'pointer'
                    }}
                  />
                </Col>
                <Col>
                  <BiTrash
                    size={22}
                    style={{
                      color: '#3f40ae'
                      , cursor: 'pointer'
                    }}
                  />
                </Col>
              </Row>
            </td>
          </tr>
        ))
      }
    </Table>
  )
}

FeeTypesTable.propTypes = {
  table: PropTypes.object
}

export default FeeTypesTable