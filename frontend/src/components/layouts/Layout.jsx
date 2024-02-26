import { Suspense } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
