import { useState } from "react"
import hidden from "../../assets/icons/hidden.png"
import google from "../../assets/icons/google.png"
import { Field, Form, Formik, FormikProps, FormikValues } from "formik"
import * as Yup from 'yup';
import { createUser } from './../../../api/api';
import Swal from "sweetalert2";

type InputsType = {
    email: string, password: string, confirm: string, agree: boolean
}

export default function Register({ modal }) {

    const initialValues: InputsType = {
        email: "", password: "", confirm: "", agree: false
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string().trim().email('Invalid email').required('Required'),
        password: Yup.string().trim()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        confirm: Yup.string().trim().required('Please retype your password.')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        agree: Yup.bool().oneOf([true], 'Field must be checked')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                console.log({ values, actions });

                const { email, password } = values
                // alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(false);
                modal.current?.close()
                Swal.showLoading();
                Swal.fire({
                    title: 'Uploading...',
                    html: 'Please wait...',
                    timer: 1000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })

                createUser({ email, password }).then(data => {
                    console.log(data)
                    Swal.fire({
                        title: data,
                        icon: "success",
                        timer: 2000,
                    })
                    actions.resetForm()
                }).catch(err => {
                    console.log(console.error(err)); Swal.fire({
                        title: `Error ${err.message}`,
                        icon: "error",
                        timer: 2000,
                    })
                })

            }}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                    <div className="mx-6 mt-4">

                        <h3 className="font text-2xl leading-7 pt-2">Create <br />Account</h3>
                        {console.log(touched, errors, isSubmitting)}
                        <Input label="Email" field="email" placeholder=" e.g. example@mail.com" />
                        {touched.email && errors.email && <div className="text-xs pt-1">{errors.email}</div>}

                        <Input label="Password" field="password" type="password" />
                        {touched.password && errors.password && <div className="text-xs pt-1">{errors.password}</div>}

                        <Input label="Confirm Password" field="confirm" type="password" />
                        {touched.confirm && errors.confirm && <div className="text-xs pt-1">{errors.confirm}</div>}


                        <label className="label cursor-pointer justify-start items-start mt-3 pl-0">
                            <Field id={'agree'} name={"agree"} type="checkbox" className="checkbox checkbox-xs rounded-md border-secondary checked:secondary [--chkbg:theme(secondary)] [--chkfg:oklch(var(--p))]" />
                            <span className="text-xs ml-2">I agree to the terms and privacy policy</span>
                        </label>
                        {touched.agree && errors.agree && <div className="text-xs">{errors.agree}</div>}

                        <button type="submit" className="btn btn-secondary w-full btn-sm my-3 hover:bg-base-100 hover:text-base-content">Create account</button>
                        <button className="btn btn-outline btn-secondary w-full btn-sm">
                            <img src={google} alt="google_icon" />
                            <span className="my-auto pt-1"> Sign Up with Google</span></button>

                    </div>
                </Form>
            )}
        </Formik>
    )
}


type InputType = {
    type?: string,
    placeholder?: string,
    label?: string,
    field: string,
}

function Input({ type = 'text', placeholder = "", label, field }: InputType) {
    const [isHidden, toogleHidden] = useState(true)

    return (

        <label className="form-control w-full max-w-xs relative flex" htmlFor={field}>
            <div className="label pl-0 pt-2 pb-0.5 ">
                <span className="label-text text-xs">{label}</span>
            </div>

            <Field id={field} name={field} type={type !== 'password' ? type : isHidden ? "password" : 'text'} placeholder={placeholder} className="input input-secondary bg-secondary bg-opacity-20 input-sm input-bordered w-full max-w-xs rounded-md" />
            {type === 'password' ? <button type="button" className="absolute bottom-2.5 right-2" onClick={() => toogleHidden(!isHidden)}><img src={hidden} alt="hidden_icon" /></button> : ""}
        </label>

    )
}
