import React, { useMemo } from 'react'
import AppointmentCard from '../utils/AppointmentCard'

export default function Appointments() {
    const appointments = useMemo(() => [
        { id: '1', name: 'Dr. Ibrahim Yekeni', role: 'Emergency', avatar: '/images/hero.png' },
        { id: '2', name: 'Dr. Ebuka Kelechi', role: 'Examination', avatar: '' },
        { id: '3', name: "Dr. Bridget Olowojeje", role: 'Consultation', avatar: '' },
        { id: '4', name: "Dr. Michael Stwart", role: 'Routine Checkup', avatar: '' },
    ], [])
    return (
        <div className='mx-2.5 py-3'>
            <div className='text-[14px] font-bold ml-1 mt-1 mb-3 text-black/80'>UPCOMING APPOINTMENTS</div>
            {appointments.map(item => <AppointmentCard key={item.id} data={item} />)}
        </div>
    )
}
