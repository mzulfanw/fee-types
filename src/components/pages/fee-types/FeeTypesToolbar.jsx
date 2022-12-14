import React, { useState } from 'react'
import { Button, Input } from '@/components/atoms/index'
import { Row, Col, Alert } from 'react-bootstrap'
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { FiRefreshCw, FiPrinter, FiDownload } from 'react-icons/fi'

function FeeTypesToolbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div
      className='mt-4 mb-5'
      style={{
        paddingLeft: '.5rem',
        paddingRight: '.5rem'
      }}
    >
      <Row
      >
        <Col
          xl={6}
        >
          <div
            className='d-flex align-items-end gap-5'
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
          <div
            className='d-flex justify-content-end gap-3'
          >
            <Col
              xl={'auto'}
            >
              <FiDownload
                style={{
                  backgroundColor: '#5e5e5e',
                  color: 'white',
                  fontSize: '35px',
                  padding: '5px 5px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              />
            </Col>
            <Col
              xl={'auto'}
            >
              <FiPrinter
                style={{
                  backgroundColor: '#5e5e5e',
                  color: 'white',
                  fontSize: '35px',
                  padding: '5px 5px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              />
            </Col>
            <Col
              xl={'auto'}
            >
              <Button
                text='Create New'
                variant='warning'
                type='button'
                size='md'
                onClick={() => { navigate('/fee-types/create') }}
              />
            </Col>
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
              className='d-flex justify-content-between px-4'
            >
              <div>
                <span>Status</span>
                <Form.Select aria-label='select-option'>
                  <option selected value='' disabled>Status</option>
                  <option value='1'>Active</option>
                  <option value='3'>Not Active</option>
                </Form.Select>
              </div>
              <div>
                <FiRefreshCw
                  style={{
                    backgroundColor: '#5e5e5e',
                    color: 'white',
                    fontSize: '35px',
                    padding: '5px 5px',
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