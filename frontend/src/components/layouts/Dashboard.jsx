import React, { Suspense, useRef, useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import Overview from '../Dashboard/Tabs/Overview'
import { AnimatePresence, motion } from "framer-motion";
import AppointmentsTab from '../Dashboard/Tabs/AppointmentsTab';


const AnimationComponent = ({ component }) => <>
    <AnimatePresence mode="wait">
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {component}
        </motion.div>
    </AnimatePresence>
</>

export default function Dashboard() {

    const [active, setActive] = useState("overview")
    const callendar = useRef()
    // const updateSize = () => cconsole.log('callendar.current: ', callendar.current);

    const updateSize = () => callendar.current.updateSize();
    // const updateSize = () => callendar.current.getApi().updateSize()

    return (
        <div className="overflow-x-auto h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">
            <Suspense fallback={<div>Loading...</div>}>

                <main className='m-3 flex gap-4'>
                    <aside className='h-full sticky top-4'>
                        <SideBar active={active} setActive={setActive} updateSize={updateSize} />
                    </aside>

                    <div className='w-full gap-4'>
                        <Navbar />
                        {active === 'overview' && <AnimationComponent component={<Overview />} />}
                        {active === 'appointments' && <AnimationComponent component={<AppointmentsTab callendar={callendar} />} />}
                    </div>



                </main>
            </Suspense>
        </div>
    )
}
