import { RefObject, useState } from "react"
import Swal from "sweetalert2";
import * as Yup from 'yup';
import google from "../../assets/icons/google.png"
import hidden from "../../assets/icons/hidden.png"
import { Field, Form, Formik, FormikProps } from "formik"
import { signInJWT, submitGoggle } from "../../services/api";
import { setToLocalStorage } from "../../services/functions";

type InputsType = {
    email: string, password: string
}
type LoginProps = {
    modal: RefObject<HTMLDialogElement | null>,
    setUser: (user: { username: string, email: string }) => void
}

export default function Login({ modal, setUser }: LoginProps) {
    const initialValues: InputsType = {
        email: "", password: ""
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string().trim().email('Invalid email').required('Required'),
        password: Yup.string().trim()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });

    const handleButtonClick = async (
        type: "jwt" | "google",
        formikProps: FormikProps<InputsType>
    ) => {
        const { submitForm } = formikProps;

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
        <>

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={async (values, actions) => {
                    console.log(123, { values, actions });

                    const { email, password } = values
                    actions.setSubmitting(false);

                    //login as test user
                    if (email === 'test@gmail.com' && password === 'password') {
                        setUser({ username: 'Ola Boluwatife', email: 'test@gmail.com' })
                        setToLocalStorage({ data: { username: 'Ola Boluwatife', email: 'test@gmail.com' } })
                        modal.current?.close()
                        Swal.fire({
                            title: 'Success',
                            icon: "success",
                            timer: 1000,
                        })
                        actions.resetForm()
                        return
                    }

                    await signInJWT({ email, password }).then(data => {
                        console.log('data', data);
                        modal.current?.close()
                        if (data.status === 401) throw new Error(data.message)

                        setUser(data)
                        setToLocalStorage(data)
                        Swal.fire({
                            title: 'Success',
                            icon: "success",
                            timer: 1000,
                        })
                        actions.resetForm()
                    }).catch(err => {
                        console.log(console.error(err));
                        modal.current?.close()
                        Swal.fire({
                            title: err.message,
                            icon: "error",
                            timer: 1000,
                        })
                        setTimeout(() => modal.current?.showModal(), 1000)
                    })



                }}
            >
                {formikProps => {
                    const {
                        touched, errors,
                    } = formikProps;
                    return <Form>
                        <div className="mx-6 mt-4">

                            <h3 className="font text-2xl leading-7 py-2 my-4 text-white">Sign In</h3>
                            {/* {console.log(touched, errors, isSubmitting)} */}
                            <Input label="Email" field="email" placeholder=" e.g. example@mail.com" />
                            {touched.email && errors.email && <div className="text-xs pt-1 text-white">{errors.email}</div>}

                            <Input label="Password" field="password" type="password" />
                            {touched.password && errors.password && <div className="text-xs pt-1 text-white">{errors.password}</div>}

                            <div className="mt-6">
                                <button type="button" onClick={() => handleButtonClick("jwt", formikProps)} className="btn btn-outline btn-secondary w-full btn-sm my-3">Sign In</button>
                                <button type="button" onClick={() => handleButtonClick("google", formikProps)} className="btn btn-outline btn-secondary w-full btn-sm">
                                    <img src={google} alt="google_icon" />
                                    <a className="my-auto pt-1" href={import.meta.env.VITE_SERVER_API + "auth/google"}> Sign In with Google</a>
                                </button>

                            </div>
                        </div>
                    </Form>

                }}
            </Formik >

        </>
    )
}

function Input({ type = 'text', placeholder = "", label, field }: InputType) {
    const [isHidden, toogleHidden] = useState(true)

    return (

        <label className="form-control w-full max-w-xs relative flex" htmlFor={field}>
            <div className="label pl-0 pt-2 pb-0.5 ">
                <span className="label-text text-xs text-white">{label}</span>
            </div>

            <Field id={field} name={field} type={type !== 'password' ? type : isHidden ? "password" : 'text'} placeholder={placeholder} className="input input-secondary bg-secondary bg-opacity-20 input-sm input-bordered w-full max-w-xs rounded-md placeholder:text-white text-white" />
            {type === 'password' ? <button type="button" className="absolute bottom-2.5 right-2" onClick={() => toogleHidden(!isHidden)}><img src={hidden} alt="hidden_icon" /></button> : ""}
        </label>

    )
}
