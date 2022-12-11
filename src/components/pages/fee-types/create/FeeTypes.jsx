/* eslint-disable indent */
import React, { Fragment } from 'react'
import Paper from '@/components/organisms/Paper'
import FeeTypesForm from './FeeTypesForm'
import { useFormik } from 'Formik'
import * as Yup from 'yup'
import FeeTypesAction from './FeeTypesAction'

function FeeTypes() {
    const formik = useFormik({
        initialValues: {
            feeTypeName: '',
            desc: '',
            feeInterface: ''
        },
        validationSchema: Yup.object({
            feeTypeName: Yup.string()
                .label('Fee Type Name')
                .min(1)
                .max(256)
                .required(),
            desc: Yup.string()
                .min(1)
                .max(4000),
            feeInterface: Yup.string()
                .min(1)
                .max(36)
                .label('Fee Interface')
                .required()
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <Fragment>
            <Paper>
                <FeeTypesForm
                    values={formik.values}
                    errors={formik.errors}
                    onChange={formik.handleChange}
                />

            </Paper>
            <FeeTypesAction
                onSubmit={formik.handleSubmit}
            />
        </Fragment>
    )
}

export default FeeTypes