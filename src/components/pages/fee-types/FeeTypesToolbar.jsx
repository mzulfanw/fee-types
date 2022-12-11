import React, { useState } from 'react'
import { Button, Input } from '@/components/atoms/index'
import { Row, Col } from 'react-bootstrap'
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

function FeeTypesToolbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div
      className='mt-4'
    >
      <Row>
        <Col
          xl={6}
        >
          <Row>
            <Col>
              <Input
                placeholder='Search...'
              />
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Col>
        <Col
          xl={6}
        >
          <Row>
            <Col
              xl={4}
            >
              SCG
            </Col>
            <Col
              xl={4}
            >
              ASD
            </Col>
            <Col
              xl={4}
            >
              <Button
                text='Create New'
                variant='warning'
                type='button'
                size='md'
                onClick={() => { navigate('/fee-types/create') }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default FeeTypesToolbar