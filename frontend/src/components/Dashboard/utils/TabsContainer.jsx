import React from 'react'

export default function TabsContainer({ children, title, text }) {
    return (
        <div className="backdrop-blur-sm bg-secondary/90 rounded-2xl shadow-lg mt-4">
            <div className='px-4 pt-4 text-xs'>
                {title && <div className='text-[#100DB1] font-bold'>{title}</div>}
                {text && <span className='text-black'>{text}</span>}
            </div>
            {children}
        </div>
    )
}
