import React, { useState } from 'react'
import { Button, Input } from '@/components/atoms/index'
import { Row, Col, Alert, Form } from 'react-bootstrap'
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { FiRefreshCw, FiPrinter, FiDownload } from 'react-icons/fi'

function FeeTypesToolbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div
      className='mt-4 mb-3'
      style={{
        paddingLeft: '.5rem',
        paddingRight: '.5rem'
      }}
    >
      <Row>
        <Col
          xl={6}
        >
          <div
            className='d-flex align-items-center justify-content-between'
          >
            <div>
              <Input
                placeholder='Search...'
              />
            </div>
            <div>
              <div
                className='fw-bold'
                style={{
                  cursor: 'pointer'
                }}
              >
                <span
                  className='me-2'
                  onClick={() => { setOpen(!open) }}
                >
                  Advanced Options
                </span>
                {
                  open ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />
                }
              </div>
            </div>
          </div>
        </Col>
        <Col
          xl={6}
        >
          <div className='d-flex justify-content-end align-items-center gap-3'>
            <div
            >
              <FiDownload
                style={{
                  backgroundColor: '#5E5E5E',
                  color: 'white',
                  fontSize: '34px',
                  padding: '10px 10px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              />
            </div>
            <div
            >
              <FiPrinter
                style={{
                  backgroundColor: '#5E5E5E',
                  color: 'white',
                  fontSize: '34px',
                  padding: '10px 10px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              />
            </div>
            <div
            >
              <Button
                text='Create New'
                variant='warning'
                type='button'
                size='md'
                onClick={() => { navigate('/fee-types/create') }}
              />
            </div>
          </div>
        </Col>
      </Row>
      {
        open && (
          <Alert
            variant='secondary'
            className='mt-3'
          >
            <div
              className='d-flex justify-content-between align-items-start mx-2'
            >
              <div>
                <p className='mb-1'>Status</p>
                <Form.Select aria-label='select-options'>
                  <option value='' disabled selected>Status</option>
                  <option value='1'>Active</option>
                  <option value='3'>Inactive</option>
                </Form.Select>
              </div>
              <div>
                <FiRefreshCw
                  style={{
                    backgroundColor: '#5E5E5E',
                    color: 'white',
                    fontSize: '34px',
                    padding: '10px 10px',
                    borderRadius: '50%',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </Alert>
        )
      }
    </div>
  )
}

export default FeeTypesToolbar