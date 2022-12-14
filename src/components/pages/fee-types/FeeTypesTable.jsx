import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Table from '@/components/molecules/Table'
import { dummy } from '@/settings/dummy'
import { Col, Modal, Row } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { Button } from '@/components/atoms'

function FeeTypesTable({
  table
}) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const handleDelete = (id, title) => {
    setOpen(true)
    setTitle(title)

  }

  return (
    <>
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
                      onClick={() => { handleDelete(val.id, val.feeType) }}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          ))
        }
        <Modal show={open} onHide={() => { setOpen(false) }}>
          <Modal.Body>Are you sure to delete {title}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary'
              text='Cancel'
              onClick={() => { setOpen(false) }}
            />

            <Button variant='primary'
              text='Delete'
              onClick={() => { setOpen(false) }}
            />
          </Modal.Footer>
        </Modal>
      </Table>
    </>
  )
}

FeeTypesTable.propTypes = {
  table: PropTypes.object
}

export default FeeTypesTable