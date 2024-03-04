import React, { Fragment, useMemo } from 'react'
import DoctorCard from './DoctorCard'
import { WhiteButton } from '../utils/Buttons'
import { useSelector } from 'react-redux'

export default function Doctors({ setTab }) {
    // const doctors = useMemo(() => [
    //     { id: '1', name: 'Dr. Ibrahim Yekeni', role: 'Heart Surgeon', avatar: '/images/hero.png', appointments: 66, },
    //     { id: '2', name: 'John', role: 'Doctor', avatar: '', appointments: 26, }
    // ], [])
    const storeDoctors = useSelector(state => state.doctors.doctorsList)

    const doctors = useMemo(() => storeDoctors.slice(0, 3), [storeDoctors])
    const goToDoctors = () => setTab('doctors')


    return (<>
        <div className='text-[14px] font-bold ml-1 mt-1 mb-3 text-black/80'>DOCTORS</div>
        <div className='flex my-2 gap-x-2 overflow-x-auto text-center text-[10px] font-bold text-black'>
            <div className='w-1/3 text-left pl-3'>
                NAME
            </div>
            <div className='w-1/4 text-left'>ROLE</div>
            <div className='w-1/5 '>BOOKED APPOINTMENTS</div>
            <div className='w-1/5 '>CHAT</div>
            <div className='w-1/5 '>BOOK NEW APPOINTMENTS</div>
            <div className='w-10'></div>
        </div>
        {doctors.map(doctor => <div key={doctor.id || doctor.name}><DoctorCard data={doctor} /></div>)}

        <div className='w-full flex justify-center mt-3 mb-1.5'><WhiteButton text="GO TO DOCTORS" action={goToDoctors}></WhiteButton></div>
    </>
    )
}
