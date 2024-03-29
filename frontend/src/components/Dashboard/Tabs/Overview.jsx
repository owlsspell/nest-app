import React from 'react'
import PieChart from '../Charts/PieChart'
import BarChart from '../Charts/BarChart'
import MapChart from '../Charts/MapChart'
import CandleStick from '../Charts/CandleStickChart'
import Doctors from '../DoctorsTable/Doctors'
import AppointmentsChart from '../Charts/AppointmentsChart'
import Appointments from '../Appointemts/Appointments'
import PreviousAppointments from '../Appointemts/PreviousAppointments'
import TabsContainer from '../utils/TabsContainer'

export default function Overview({ setTab }) {
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
        <TabsContainer title="Welcome Boluwatife," text="How’re you feeling today?">
            <div className='flex'>
                <div className='w-1/2 md:w-4/6 h-full md:max-h-80 grid grid-cols-1 md:w-full md:grid-cols-3  gap-4 p-4'>
                    <div className='border border-base-content/30 px-2 py-3 rounded-lg'>
                        <PieChart title='DIAGNOSTICS' data={diagnostics} />
                    </div>
                    <div className='border border-base-content/30 px-2 py-3 rounded-lg'>
                        <PieChart title="PATIENTS" data={patients} />
                    </div>
                    <div className='border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                        <BarChart />
                    </div>
                    <div className='col-span-1 md:col-span-2 border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                        <MapChart />
                    </div>
                    <div className='border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                        <CandleStick data={causes} />
                    </div>
                    <div className='hidden md:block col-span-1 md:col-span-3 border border-base-content/30 rounded-lg mb-0 mt-auto h-full px-2 py-2'>
                        <Doctors setTab={setTab} />
                    </div>

                </div>
                <div className='w-1/2 md:w-2/6 py-4 pr-4'>
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
        </TabsContainer>
    )
}
