import React, { useState } from 'react'
import ModalMain from './ModalMain';
import Register from './Register';
import go_back from '../../assets/icons/go_back.png';

export default function Modal({ modal }) {
    const [view, setView] = useState('main')
    const setMainPage = () => setView("main")
    return (<>
        <dialog ref={modal} className="modal  backdrop-blur-sm  backdrop-opacity-0 bg-base-200/80 fixed" >
            <div className="modal-box w-6/12 max-w-xl min-h-[610px] p-0 max-w-[550px] ">
                <div className="z-20 h-full min-h-[610px] relative  bg-[url('/images/background.jpg')] bg-center bg-cover no-repeat">
                    <div className='backdrop-blur-sm backdrop-opacity-80 bg-base-200/70 min-h-[610px] h-full'>
                        {view !== 'main' && <button onClick={setMainPage} className="btn btn-xs btn-circle btn-ghost absolute left-8 top-2 leading-4">
                            <img src={go_back} alt="" className='h-3' />
                        </button>}
                        <div className='p-4 h-full min-h-[610px] flex flex-col justify-center'>
                            {view === 'main' ? <ModalMain setView={setView} /> :
                                view === "register" ? <Register modal={modal} /> : ""}

                            <div className="modal-action m-0">
                                <form method="dialog">
                                    <button className="btn btn-xs btn-circle btn-ghost absolute right-8 top-3 leading-4 text-md">✕</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog >
    </>
    )
}
