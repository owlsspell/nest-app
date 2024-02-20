import React, { Suspense } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import LineChart from '../Dashboard/Charts/LineChart'
import PieChart from '../Dashboard/Charts/PieChart'
import BarChart from '../Dashboard/Charts/BarChart'
import MapChart from '../Dashboard/Charts/MapChart'
import CandleStick from '../Dashboard/Charts/CandleStick'
import Doctors from '../Dashboard/DoctorsTable/Doctors'
import AppointmentsChart from '../Dashboard/Charts/AppointmentsChart'
import Appointments from '../Dashboard/Appointemts/Appointments'
import PreviousAppointments from '../Dashboard/Appointemts/PreviousAppointments'

export default function Dashboard() {
    const diagnostics = [
        { value: 580, name: 'MALARIA' },
        { value: 484, name: 'COLD' },
        { value: 300, name: 'TYPHOID' },
        { value: 735, name: 'OTHERS' }
    ]
    const patients = [
        { value: 480, name: 'WOMEN' },
        { value: 620, name: 'MEN' },
        { value: 210, name: 'CHILDREN' },
    ]
    const causes = [
        { value: 580, name: 'MALARIA' },
        { value: 484, name: 'COLD' },
        { value: 300, name: 'TYPHOID' },
        { value: 250, name: 'COUGH' },
        { value: 485, name: 'HEADACHE' }
    ]

    return (
        <div className="overflow-x-auto h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">
            <Suspense fallback={<div>Loading...</div>}>

                <main className='m-3 flex gap-4'>
                    <aside className='h-full sticky top-4'>
                        <SideBar />
                    </aside>

                    <div className='w-full gap-4'>
                        <Navbar />
                        <div className="backdrop-blur-sm bg-secondary/90 rounded-2xl shadow-lg mt-4">
                            {/* <LineChart /> */}
                            {/* <Outlet /> */}
                            <div className='px-4 pt-4 text-xs'>
                                <div className='text-[#100DB1] font-bold'>Welcome Boluwatife,</div>
                                <span className='text-black'>How’re you feeling today?</span>
                            </div>
                            <div className='flex'>
                                <div className='w-4/6 max-h-80 grid grid-cols-3 gap-4 p-4'>
                                    <div className='border border-base-content/30 px-2 py-3 rounded-lg'>
                                        <PieChart title='DIAGNOSTICS' data={diagnostics} />
                                    </div>
                                    <div className='border border-base-content/30 px-2 py-3 rounded-lg'>
                                        <PieChart title="PATIENTS" data={patients} />
                                    </div>
                                    <div className='border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                                        <BarChart />
                                    </div>
                                    <div className='col-span-2 border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                                        <MapChart />
                                    </div>
                                    <div className='border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                                        <CandleStick data={causes} />
                                    </div>
                                    <div className='col-span-3 border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                                        <Doctors />
                                    </div>

                                </div>
                                <div className='w-2/6 py-4 pr-4'>
                                    <div className="border border-base-content/30 rounded-t-lg">
                                        <AppointmentsChart />
                                    </div>
                                    <div className="border border-base-content/30 border-b-0 border-t-0">
                                        <Appointments />
                                    </div>
                                    <div className="border border-base-content/30 rounded-b-lg">
                                        <PreviousAppointments />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </main>
            </Suspense>
        </div>
    )
}
