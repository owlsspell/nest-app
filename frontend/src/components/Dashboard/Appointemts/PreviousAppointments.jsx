import { useMemo, useState } from 'react'
import AppointmentCard from '../utils/AppointmentCard'
import { AnimatePresence, motion } from "framer-motion";

export default function PreviousAppointments() {
    const tabs = ['Day', 'Week', 'Month']
    const [selectedTab, setSelectedTab] = useState(tabs[1]);
    const appointments = useMemo(() => [
        { id: '1', name: 'Dr. Scut Tom', role: 'Sick Visit', avatar: '/images/hero.png' },
        { id: '2', name: 'Dr. Ebuka Kelechi', role: 'Examination', avatar: '' },
    ], [])
    return (
        <div className='mx-2.5 py-3'>
            <div className='text-[14px] font-bold ml-1 mt-1 mb-3 text-black/80'>PREVIOUS APPOINTMENTS</div>
            <div role="tablist" className="flex justify-around mb-3 tabs tabs-boxed border border-base-content/30 p-0">
                {tabs.map(tab => <div key={tab}>
                    <a role="tab"
                        className='tab font-semibold text-xs text-black'
                        onClick={() => setSelectedTab(tab)}>{tab}</a>
                    {tab === selectedTab ? (
                        <motion.div className="underline bg-primary h-0.5 mx-3" layoutId="underline" />
                    ) : null}
                </div>)}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTab ? selectedTab : "empty"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    {appointments.map(item => <AppointmentCard key={item.id} data={item} />)}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
