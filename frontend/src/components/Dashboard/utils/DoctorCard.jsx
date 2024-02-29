import React from 'react'
import { BlueButton, WhiteButton } from './Buttons'

export default function DoctorCard({ data }) {
    const { name, role, avatar } = data

    return (
        <div className="card card-compact bg-base-100/40 border border-base-content/30 px-2 py-3 rounded-xl">
            {avatar.length > 0 ?
                <div className="avatar mt-2 mb-1">
                    <div className="mask mask-circle w-1/2 m-auto">
                        <img src={avatar} alt="" />
                    </div>
                </div> :
                <div className="avatar placeholder mt-2 mb-1">
                    <div className="bg-base-content text-secondary rounded-full w-1/2 m-auto">
                        <span className="text-md">{name.slice(0, 2).toUpperCase()}</span>
                    </div>
                </div>}
            <div className="my-2 mb-0 mt-auto">
                <h6 className="card-title text-[14px] font-bold text-black/80 justify-center leading-4 text-center">{name}</h6>
                <div className='text-[14px] text-primary text-center'>{role}</div>
                <hr className='my-3' />
                <div className="card-actions justify-center ">
                    <WhiteButton text="CHAT" />
                    <BlueButton text="Book" />
                </div>
            </div>
        </div>
    )
}
