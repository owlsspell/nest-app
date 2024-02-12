import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"

export default function SideBar() {

    const [active, setActive] = useState("overview")

    const listMenu = {
        main: [
            { title: "Overview", path: "overview", iconName: "icon-1" },
            { title: "Appointments", path: "appointments", iconName: "icon-2" },
            { title: "Doctors", path: "doctors", iconName: "icon-3" },
            { title: "Pathology Results", path: "results", iconName: "icon-4" },
            { title: "Chats", path: "chats", iconName: "icon-5" },
        ],
        account: [
            { title: "Settings", path: "settings", iconName: "icon-6" },
            { title: "Logout", path: "logout", iconName: "icon-7" },
        ]
    }

    const changePage = (path) => setActive(path)

    return (
        <div className='w-64 h-[calc(100vh-1.5rem)] rounded-2xl backdrop-blur-sm bg-secondary/60 shadow-lg'>

            <div className="flex items-center gap-4 py-6 px-10">
                <img src="/icons/logo.png" alt="" className="h-8 w-auto" />
                <span className='text-primary text-2xl'>medica</span>
            </div>
            <hr />
            <ul className="py-4 text-base-content px-0 rounded-none">
                {listMenu.main.map(li =>
                    <li className='text-black/60'>
                        <div className={`px-8 py-2 cursor-pointer flex items-baseline rounded-none ${li.path === active ? "bg-secondary/40" : ""}`} onClick={() => changePage(li.path)}>
                            {/* <img src="/icons/icon-1.png" alt={li.iconName} /> */}

                            <img src={`/icons/sidebar/${li.iconName}.png`} alt={li.iconName} className='mr-2' />
                            <span
                                className={`text-xs ${li.path === active ? "font-bold text-primary" : ""}`}>{li.title}
                            </span>

                        </div>
                    </li>
                )}
            </ul>
            <span className='text-black/60 px-8 font-bold uppercase text-sm'>Account</span>
            <ul className="menu text-base-content px-0 rounded-none">
                {listMenu.account.map(li =>
                    <li className='text-black/60'>
                        <a className={`px-8 flex items-baseline rounded-none hover:bg-secondary/40 ${li.path === active ? "bg-secondary/40" : ""}`} onClick={() => changePage(li.path)}>
                            {/* <img src="/icons/icon-1.png" alt={li.iconName} /> */}
                            <img src={`/icons/sidebar/${li.iconName}.png`} alt={li.iconName} className='mr-2' />
                            <span className={`text-xs ${li.path === active ? "font-bold text-primary" : ""}`}>{li.title}</span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}
