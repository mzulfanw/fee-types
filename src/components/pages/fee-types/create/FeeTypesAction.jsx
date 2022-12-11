/* eslint-disable indent */
import React from 'react'
import Button from '@/components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function FeeTypesAction({
    onSubmit = () => { }
}) {
    const navigate = useNavigate()
    return (
        <div
            className='d-flex mt-3'
        >
            <Button
                text='SAVE'
                className='me-2'
                variant='success'
                onClick={onSubmit}
            />
            <Button
                text='CANCEL'
                variant='light'
                className='border border-secondary'
                onClick={() => { navigate(-1) }}
            />
        </div>
    )
}

FeeTypesAction.propTypes = {
    onSubmit: PropTypes.func
}


export default FeeTypesAction
