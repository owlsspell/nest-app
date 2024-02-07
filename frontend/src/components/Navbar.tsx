import { useEffect, useRef, useState } from "react"
import ModalLogin from './Auth/Modal';
import { Link } from "react-router-dom";

export default function Navbar() {

    const modal = useRef<HTMLDialogElement | null>(null)

    const [user, setUser] = useState(null)

    const handleOpen = () => modal.current?.showModal()

    const logout = () => {
        setUser(null)
        localStorage.removeItem("userData")
    }
    useEffect(() => {
        const userData = localStorage.getItem('userData')
        if (userData) setUser(userData)
    }, [])

    return <>
        <div className="navbar my-2 mx-auto bg-primary rounded-md w-[calc(100%-15px)]">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl"><p>MBA</p></Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                {!user ?
                    <button className="btn btn-secondary" onClick={handleOpen} >Login</button>
                    :
                    <div className="dropdown dropdown-end mx-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li>
                                <Link to="/dashboard" className="justify-between">
                                    Dashboard
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={logout}><a>Logout</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
        <ModalLogin modal={modal} user={user} setUser={setUser} />

    </>
}