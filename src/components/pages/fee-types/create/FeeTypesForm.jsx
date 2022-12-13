import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Alert } from 'react-bootstrap'
import { Input } from '@/components/atoms'

function FeeTypesForm({
  values,
  errors,
  touched,
  onChange = () => { },
  onBlur = () => { }
}) {
  return (
    <Fragment>
      <Row>
        <Col
          xl={6}
          md={12}
        >
          <Row>
            <Col
              xl={12}
            >
              <Input
                name='feeTypeName'
                value={values.feeTypeName}
                onChange={onChange}
                isFlex
                label={
                  <p
                    style={{
                      marginTop: '5px'
                    }}
                  >
                    Fee Type Name
                    <span className='text-danger'>*</span>
                  </p>
                }
                error={errors.feeTypeName && touched.feeTypeName ? errors.feeTypeName : ''}
                onBlur={onBlur}
              />
            </Col>
            <Col
              xl={12}
            >
              <Input
                name='desc'
                as='textarea'
                isFlex
                label='Description'
              />
            </Col>
          </Row>
        </Col>
        <Col
          xl={6}
          md={12}
        >
          <Alert
            variant='secondary'
          >
            <p className='fw-bold fs-6'>For Interface Purpose</p>
            <Input
              isFlex
              name='feeInterface'
              value={values.feeInterface}
              onChange={onChange}
              label={
                <p
                  style={{
                    marginTop: '5px'
                  }}
                >
                  Fee Type Code
                  <span className='text-danger'>*</span>
                </p>
              }
              error={errors.feeInterface && touched.feeInterface ? errors.feeInterface : ''}
              onBlur={onBlur}
            />
          </Alert>
        </Col>
      </Row>
      {/* Translation */}
      <div
        style={{
          marginTop: '100px'
        }}
      >
        <p className='fs-5'>Translation</p>
        <hr />
      </div>
      {/* End Translation */}
    </Fragment>
  )
}

FeeTypesForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default FeeTypesForm