import React, { useMemo } from 'react'
import DoctorCard from '../utils/DoctorCard'
import TabsContainer from '../utils/TabsContainer'

export default function Doctors({ setTab }) {
    const doctors = useMemo(() => [
        { id: '1', name: 'Dr. Ibrahim Yekeni', role: 'Heart Surgeon', avatar: '/images/hero.png', appointments: 66, },
        { id: '2', name: 'John', role: 'Doctor', avatar: '', appointments: 26, }
    ], [])
    return (
        <TabsContainer title="Doctors">
            <div className='grid grid-cols-4 gap-3 p-4'>
                {doctors.map(doctor => <DoctorCard data={doctor} />)}
            </div>
        </TabsContainer>
    )
}
