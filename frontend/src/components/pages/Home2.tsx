import Swiper from '../Swiper'
import AddSection from '../AddSection'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Home2() {
    return (
        <div className="h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">

            <div className="container mx-auto">

                {/* navbar */}
                <div className="navbar relative z-[10] backdrop-blur-md bg-white/30 mx-auto mt-5 px-5 max-w-5xl w-auto rounded-full shadow-lg">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#878787f7] rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 ">
                                <li><a>Item 1</a></li>
                                <li>
                                    <details>
                                        <summary>Parent</summary>
                                        <ul className="p-2 bg-[#878787f7] z-20">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <a className="btn btn-sm bg-white/30 border-none hover:bg-white/60 hover:text-slate-500">Button</a>
                    </div>
                </div>
                {/* end navbar */}

                {/* start second navbar */}

                <div className="navbar relative z-[10] backdrop-blur-md bg-white/30 mx-auto mt-2 px-5 max-w-5xl w-auto rounded-full shadow-lg">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl">Movies</a>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li><a>Item 1</a></li>
                            <li>
                                <details>
                                    <summary>Catalogs</summary>
                                    <ul className="p-2 bg-[#878787f7] z-20">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* end second navbar */}


            </div>
        </div>
    )
}
