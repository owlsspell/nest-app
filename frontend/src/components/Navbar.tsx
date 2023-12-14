import { useRef, useState } from "react"
import ModalLogin from './Auth/Modal';

export default function Navbar() {

    const modal = useRef<HTMLDialogElement | null>(null)

    const [user, setUser] = useState(null)

    const handleOpen = () => modal.current?.showModal()

    return <>
        <div className="navbar my-2 mx-auto bg-primary rounded-md w-[calc(100%-15px)]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><p>MBA</p></a>
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
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
        <ModalLogin modal={modal} />
    </>
}