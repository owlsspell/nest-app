import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from './../Loader';

export default function SignInGoogle() {
    const [searchParams] = useSearchParams();
    const setToLocalStorage = (data) => localStorage.setItem('userData', JSON.stringify(data))
    const navigate = useNavigate()
    useEffect(() => {
        setToLocalStorage({ data: JSON.parse(searchParams.get('data')), access_token: searchParams.get('access_token') })
        navigate('/')
    }, [])
    return (
        <Loader />
    )
}
