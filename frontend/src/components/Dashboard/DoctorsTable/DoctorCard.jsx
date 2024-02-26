import React from 'react'

export default function DoctorCard({ data }) {
    const { name, role, avatar, appointments } = data

    return (
        <div className='flex my-2 items-center justify-center gap-x-2 text-[14px] font-bold text-black border border-base-content/30 py-2 rounded-lg overflow-x-auto text-center'>
            <div className='w-1/3'>
                <div className="flex gap-x-2 items-center pl-3">
                    {avatar.length > 0 ? <div className="avatar">
                        <div className="avatar placeholder">
                            <div className="mask mask-circle w-6">
                                <img src={avatar} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                        :
                        <div className="avatar placeholder">
                            <div className="bg-base-content text-secondary rounded-full w-6">
                                <span className="text-[12px]">{name.slice(0, 2).toUpperCase()}</span>
                            </div>
                        </div>
                    }
                    <div className="text-xs text-left pr-2 text-[14px]">{name}</div>

                </div>
            </div>
            <div className='w-1/4 text-left'>{role}</div>
            <div className='w-1/5 text-red-600'>{appointments}</div>
            <div className='w-1/5 flex justify-center'><img src="/icons/chat.png" alt="" /></div>
            <div className='w-1/5'><button className="btn btn-outline btn-xs text-[14px] px-4 min-h-0 h-4 border border-base-content/30 rounded-lg text-black hover:bg-primary hover:border-none">BOOK</button> </div>
            <div className='w-10 pb-0.5'><button>...</button></div>
        </div>
    )
}
