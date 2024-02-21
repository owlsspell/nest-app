import React from 'react'

export default function AppointmentCard({ data }) {
    const { name, role, avatar } = data

    const colorsRole = {
        'Emergency': '#100DB1',
        'Examination': '#FECA57',
        'Consultation': '#763CEF',
        'Routine Checkup': '#F80D38',
        'Sick Visit': '#2798F7',
    }
    return (
        <div className='flex my-2 p-3 items-center justify-between gap-x-2 text-[14px] font-bold text-black border border-base-content/30 py-2 rounded-lg overflow-x-auto text-center'>
            <div className='w-1/2'>
                <div className="flex gap-x-2 items-center">
                    {avatar.length > 0 ?
                        <div className="avatar">
                            <div className="mask mask-squircle w-6 h-6">
                                <img src={avatar} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div> :
                        <div className="avatar placeholder">
                            <div className="bg-base-content text-secondary rounded-full w-6">
                                <span className="text-[12px]">{name.slice(0, 2).toUpperCase()}</span>
                            </div>
                        </div>}
                    <div>
                        <div className="text-left pr-2 text-[12px]">{name}</div>
                        <div className='text-left pr-2 text-[12px]' style={{ color: colorsRole[role] }}>{role}</div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='pb-0.5'><button>...</button></div>
                <div className='font-normal'>Tuesday, October 24</div>
            </div>
        </div>
    )
}
