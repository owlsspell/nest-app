import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function SideBar({ active, setActive, updateSize }) {

    const [isOpen, setOpen] = useState(false);

    const listMenu = {
        main: [
            { title: "Overview", path: "overview", iconName: "icon-1" },
            { title: "Appointments", path: "appointments", iconName: "icon-2" },
            { title: "Doctors", path: "doctors", iconName: "icon-3" },
            { title: "Results", path: "results", iconName: "icon-4" },
            { title: "Chats", path: "chats", iconName: "icon-5" },
        ],
        account: [
            { title: "Settings", path: "settings", iconName: "icon-6" },
            { title: "Logout", path: "logout", iconName: "icon-7" },
        ]
    }

    const changePage = (path) => setActive(path)
    const handleOpen = () => {
        setOpen(!isOpen)
        updateSize()
    }

    const variants = {
        open: { width: 50 },
        closed: { width: 270 },
    }
    console.log('active', active);
    return (
        <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.7 }}
            className='w-48 h-[calc(100vh-1.5rem)] rounded-2xl backdrop-blur-sm bg-secondary/90 shadow-lg'>

            <div className="flex items-center justify-center gap-4 py-6 border-b-2 h-20">
                <motion.img
                    animate={isOpen ? { display: 'none', opacity: 0 } : { display: 'block', height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    src="/icons/logo.png" alt="" className="h-8 w-auto pt-1.5" />
                <motion.span
                    animate={isOpen ? { display: 'none', opacity: 0 } : { display: 'block', opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-primary text-2xl'>medica</motion.span>
                <button onClick={handleOpen}><img src="/icons/expand.png" alt="" className="h-1.5 w-auto mt-1.5" /></button>
            </div>
            <ul className="py-4 text-base-content px-0 rounded-none">

                {listMenu.main.map(li =>
                    <li className='text-black/60' key={li.path}>
                        <motion.div
                            animate={isOpen ? { paddingLeft: 15, paddingRight: 15 } : { paddingLeft: 28, paddingRight: 28 }}
                            className={`cursor-pointer flex items-center rounded-none py-3 hover:bg-secondary/40 ${li.path === active ? "bg-secondary/80" : ""} `}
                            onClick={() => changePage(li.path)}>
                            <img src={`/icons/sidebar/${li.iconName}.png`} alt={li.iconName} className='mr-2' />
                            <motion.div
                                transition={{ duration: 0.3, delay: 0.3 }}
                                animate={isOpen ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
                                className={`text-xs ${li.path === active ? "font-bold text-primary" : ""} `}>{li.title}
                            </motion.div>

                        </motion.div>
                    </li>
                )}
            </ul>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-black/60 px-8 font-bold uppercase text-sm'>
                Account
            </motion.span>
            <ul className="menu text-base-content px-0 rounded-none">
                {listMenu.account.map(li =>
                    <li className='text-black/60' key={li.path}>
                        <motion.div
                            animate={isOpen ? { paddingLeft: 15, paddingRight: 15 } : { paddingLeft: 28, paddingRight: 28 }}
                            className={`flex items-baseline rounded-none hover:bg-secondary/40 ${li.path === active ? "bg-secondary/40" : ""}`} onClick={() => changePage(li.path)}>
                            <img src={`/icons/sidebar/${li.iconName}.png`} alt={li.iconName} className='mr-2' />
                            <motion.span
                                animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 'auto' }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className={`text-xs ${li.path === active ? "font-bold text-primary" : ""}`}>{li.title}</motion.span>
                        </motion.div>
                    </li>
                )}
            </ul>
        </motion.div>
    )
}
