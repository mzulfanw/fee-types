import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

function Input({
  label,
  type = 'text',
  placeholder = '',
  name,
  value,
  isFlex = false,
  error = false,
  onChange = () => { },
  ...other
}) {
  return (
    <>
      <style type='text/css'>
        {
          `
            .form-text {
              color: red;
            }
          `
        }
      </style>
      {
        isFlex === false && (
          <>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
            />
          </>
        )
      }
      {
        isFlex === true && (
          <>
            <Row>
              <Col
                xl={4}
                md={12}
              >
                <Form.Label htmlFor={label}>{label}</Form.Label>
              </Col>
              <Col
                xl={6}
                md={12}
              >
                <Form.Control
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onChange}
                  {...other}
                />
                {
                  error && (
                    <div
                      className='mt-2 text-danger'
                    >
                      <Form.Text

                      >
                        {error}
                      </Form.Text>
                    </div>
                  )
                }
              </Col>
            </Row>
          </>
        )
      }
    </>
  )
}

Input.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isFlex: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func
}

export default Input