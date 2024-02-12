import React, { Suspense } from 'react'
import Navbar from '../Dashboard/Navbar'
import SideBar from '../Dashboard/SideBar'
import { Outlet } from 'react-router-dom'

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
                        <div class="backdrop-blur-sm bg-secondary/60 rounded-2xl shadow-lg mt-4"> Dashboard<Outlet /></div>
                    </div>



                </main>
            </Suspense>
        </div>
    )
}
