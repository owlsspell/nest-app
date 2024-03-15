import React from 'react'

export default function Navbar() {
    return (
        // <div className="h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">

        // <div className="container mx-auto">



        //     {/* start second navbar */}

        //     <div className="navbar relative z-[10] backdrop-blur-md bg-white/30 mx-auto mt-2 px-5 max-w-5xl w-auto rounded-full shadow-lg">
        //         <div className="navbar-start">
        //             <a className="btn btn-ghost text-xl">Movies</a>
        //         </div>
        //         <div className="navbar-end hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1 ">
        //                 <li><a>Item 1</a></li>
        //                 <li>
        //                     <details>
        //                         <summary>Catalogs</summary>
        //                         <ul className="p-2 bg-[#878787f7] z-20">
        //                             <li><a>Submenu 1</a></li>
        //                             <li><a>Submenu 2</a></li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>

        //     {/* end second navbar */}


        // </div>
        // </div>

        < div className="navbar relative z-[10] backdrop-blur-sm bg-secondary/90 mx-auto px-5 w-auto rounded-2xl shadow-lg" >
            <div className="navbar ">

                <div className="flex-1 gap-2 justify-between">
                    <div className="form-control hidden md:flex">
                        <input type="text" placeholder="Search" className="input input-bordered input-sm p-5 bg-transparent" />
                    </div>
                    <div className="dropdown dropdown-end flex items-center min-w-max">
                        <div className='rounded-full cursor-pointer w-6 h-6 mx-2 border border-black/10 bg-secondary flex'>
                            <img src="/icons/notification.png" className='m-auto' />
                        </div>
                        <div className="divider w-[1px] mx-2 bg-black/10"></div>
                        <div className='flex items-center'>
                            <div tabIndex={0} role="button" className="mx-2 avatar w-8">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>

                            </div>
                            <div className='ml-2'>
                                <div className='text-xs font-extrabold'>Ola Boluwatife</div>
                                <div className='text-xs text-primary'> PATIENT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    )
}
