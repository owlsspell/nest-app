import React, { useMemo, useState } from 'react'
import TabsContainer from '../utils/TabsContainer'
import { BlueButton } from '../utils/Buttons'
import { Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import { getFromLocalStorage } from '../../../services/functions';
import { updateUserInfo } from '../../../services/api';

export default function Settings() {
    const user = useMemo(() => {
        const data = JSON.parse(getFromLocalStorage('userData'))
        return data.data
    })

    const initialValues = {
        username: user.username ?? "", email: user.email ?? "", accountType: "Patient"
    }

    const ProfileSchema = Yup.object().shape({
        email: Yup.string().trim().email('Invalid email').required('Required'),
    });
    return (
        <TabsContainer>

            <div className='grid grid-cols-6 gap-3 p-4'>

                <div className="avatar placeholder col-span-2">
                    <div className="bg-base-content text-secondary rounded-full w-24 m-auto mt-0 border-4 border-gray-300">
                        <div className="text-[14px] p-2.5 text-center">
                            <div className='w-5 m-auto mb-1.5'><img src="/icons/photo.png" alt="" /></div>
                            <span>Click to change photo</span>
                        </div>

                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='text-xs text-[#100DB1] font-bold'>Account Details</div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={ProfileSchema}
                        onSubmit={async (values, actions) => {
                            const result = await updateUserInfo({ values, id: user.id });
                            console.log('result', result);
                        }}
                    >
                        {formikProps => {
                            const {
                                touched, errors,
                            } = formikProps;
                            return <Form>
                                <div className="my-4">

                                    <Input label="Full Name" field="username" touched={touched} errors={errors} />
                                    <Input label="Email" field="email" touched={touched} errors={errors} />
                                    <Input label="Account Type" field="accountType" touched={touched} errors={errors} disabled={true} />

                                    <BlueButton text="SAVE NEW CHANGES" className="w-full btn-sm my-4" />

                                </div>
                            </Form>

                        }}
                    </Formik >

                </div>
            </div>
        </TabsContainer>
    )
}


function Input({ label, field, touched, errors, disabled = false }) {

    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text text-black/70 text-xs">{label}</span>
            </div>
            <Field id={field} name={field} type='text' className="input input-bordered w-full max-w-xs rounded-full bg-secondary/20 text-sm h-10" disabled={disabled} />
            {touched[field] && errors[field] && <div className="text-xs pt-1 text-red-400 ml-1">{errors[field]}</div>}

        </label>
    )
}
