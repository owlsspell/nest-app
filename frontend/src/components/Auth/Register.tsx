import { RefObject, useState } from "react"
import hidden from "../../assets/icons/hidden.png"
import google from "../../assets/icons/google.png"
import { Field, Form, Formik, FormikProps } from "formik"
import * as Yup from 'yup';
import { createUser, signInJWT, submitGoggle } from '../../services/api';
import Swal from "sweetalert2";
import { setToLocalStorage } from "../../services/functions";

type InputsType = {
    email: string, password: string, confirm: string, agree: boolean,
}
type LoginProps = {
    modal: RefObject<HTMLDialogElement | null>,
    setUser: (user: { username: string, email: string }) => void
}
export default function Register({ modal, setUser }: LoginProps) {

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


    const handleButtonClick = async (
        type: "jwt" | "google",
        formikProps: FormikProps<InputsType>
    ) => {
        const { values, submitForm } = formikProps;
        console.log(type, values);

        const getUserData = async () => {
            switch (type) {
                case 'jwt':
                    await submitForm();
                    break
                case 'google':
                    await submitGoggle()
                    break
            }
        }

        await getUserData()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={async (values, actions) => {

                const { email, password } = values
                modal.current?.close()
                actions.setSubmitting(false);
                Swal.showLoading();
                Swal.fire({
                    title: 'Uploading...',
                    html: 'Please wait...',
                    timer: 1000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })

                await createUser({ email, password }).then(data => {

                    if (data.message === "User already exists") throw new Error(data.message)
                    Swal.fire({
                        title: data.status,
                        icon: "success",
                        timer: 2000,
                    })

                    actions.resetForm()
                    return data
                }).catch(err => {
                    console.log(console.error(err));
                    Swal.fire({
                        title: err.message,
                        icon: "error",
                        timer: 1000,
                    })
                    setTimeout(() => modal.current?.showModal(), 1200)
                })

                const user = await signInJWT({ email, password })

                setUser(user)
                setToLocalStorage(user)

            }}
        >
            {formikProps => {
                const {
                    touched, errors,
                } = formikProps;
                return <Form>
                    <div className="mx-6 mt-4">

                        <h3 className="font text-2xl text-white leading-7 pt-2">Create <br />Account</h3>

                        <Input label="Email" field="email" placeholder=" e.g. example@mail.com" />
                        {touched.email && errors.email && <div className="text-xs pt-1 text-white">{errors.email}</div>}

                        <Input label="Password" field="password" type="password" />
                        {touched.password && errors.password && <div className="text-xs pt-1 text-white">{errors.password}</div>}

                        <Input label="Confirm Password" field="confirm" type="password" />
                        {touched.confirm && errors.confirm && <div className="text-xs pt-1 text-white">{errors.confirm}</div>}


                        <label className="label cursor-pointer justify-start items-start mt-3 pl-0">
                            <Field id={'agree'} name={"agree"} type="checkbox" className="checkbox checkbox-secondary checkbox-xs rounded-md border-secondary checked:secondary [--chkbg:theme(secondary)] [--chkfg:oklch(var(--p))] " />
                            <span className="text-xs ml-2 text-white">I agree to the terms and privacy policy</span>
                        </label>
                        {touched.agree && errors.agree && <div className="text-xs text-white">{errors.agree}</div>}

                        <button type="button" onClick={() => handleButtonClick("jwt", formikProps)} className="btn btn-outline btn-secondary w-full btn-sm my-3 hover:bg-base-100 hover:text-base-content">Create account</button>
                        <button type="button" onClick={() => handleButtonClick("google", formikProps)} className="btn btn-outline btn-secondary w-full btn-sm">
                            <img src={google} alt="google_icon" />
                            <a className="my-auto pt-1" href={import.meta.env.VITE_SERVER_API + "auth/google"}> Sign Up with Google</a></button>

                    </div>
                </Form>

            }}
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
                <span className="label-text text-xs text-white">{label}</span>
            </div>

            <Field id={field} name={field} type={type !== 'password' ? type : isHidden ? "password" : 'text'} placeholder={placeholder} className="input input-secondary bg-secondary bg-opacity-20 input-sm input-bordered w-full max-w-xs rounded-md placeholder:text-white text-white" />
            {type === 'password' ? <button type="button" className="absolute bottom-2.5 right-2 text-white" onClick={() => toogleHidden(!isHidden)}><img src={hidden} alt="hidden_icon" /></button> : ""}
        </label>

    )
}
