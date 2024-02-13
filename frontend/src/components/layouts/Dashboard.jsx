import React, { Suspense } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import LineChart from '../Dashboard/Charts/LineChart'
import PieChart from '../Dashboard/Charts/PieChart'

export default function Dashboard() {
    return (
        <div className="h-screen w-full min-h-[610px] fixed bg-blend-darken	bg-[#0000001f] bg-[url('/images/background3.png')] bg-center bg-cover no-repeat">
            <Suspense fallback={<div>Loading...</div>}>

                <main className='m-3 flex gap-4'>
                    <aside className='h-full'>
                        <SideBar />
                    </aside>

                    <div className='w-full gap-4'>
                        <Navbar />
                        <div className="backdrop-blur-sm bg-secondary/90 rounded-2xl shadow-lg mt-4"> Dashboard
                            {/* <LineChart /> */}
                            {/* <Outlet /> */}
                            <div className='flex'>
                                <div className='w-3/4 grid grid-cols-3 gap-4 p-4'>
                                    <div className='border border-base-content/60 h-60'>
                                        <PieChart />

                                    </div>
                                    <div className='border border-base-content/60'></div>
                                    <div className='border border-base-content/60'></div>
                                </div>
                                <div className='w-1/4'>2</div>
                            </div>
                        </div>
                    </div>



                </main>
            </Suspense>
        </div>
    )
}
