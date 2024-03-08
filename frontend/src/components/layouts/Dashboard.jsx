import React, { Suspense, useEffect, useRef, useState, FunctionComponent } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import Overview from '../Dashboard/Tabs/Overview'
import { AnimatePresence, motion } from "framer-motion";
import AppointmentsTab from '../Dashboard/Tabs/AppointmentsTab';
import Loader from '../Loader';
import Doctors from '../Dashboard/Tabs/Doctors';
import Results from '../Dashboard/Tabs/Results';
import Settings from '../Dashboard/Tabs/Settings';


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
    const page = useRef()
    // const updateSize = () => console.log('callendar.current: ', callendar.current);

    // const updateSize = () => {
    //     const calendarApi = callendar.current.getApi()
    //     console.log('calendarApi', calendarApi);
    //     calendarApi.updateSize();
    // }

    // const updateSize = () => callendar.current.updateSize();
    // const updateSize = () => callendar.current.getApi().updateSize()
    useEffect(() => {
        page.current.scrollTo(0, 0)
    }, [active])

    return (
        <div ref={page} className="overflow-x-auto h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">
            <Suspense fallback={<Loader />}>

                <main className='m-3 flex gap-4'>
                    <aside className='h-full sticky top-4'>
                        <SideBar active={active} setActive={setActive} />
                    </aside>

                    <div className='w-full gap-4'>
                        <Navbar />
                        {active === 'overview' && <AnimationComponent component={<Overview setTab={setActive} />} />}
                        {active === 'appointments' && <AnimationComponent component={<AppointmentsTab callendar={callendar} />} />}
                        {active === 'doctors' && <AnimationComponent component={<Doctors />} />}
                        {active === 'results' && <AnimationComponent component={<Results />} />}
                        {active === 'settings' && <AnimationComponent component={<Settings />} />}
                    </div>



                </main>
            </Suspense>
        </div>
    )
}
