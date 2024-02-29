import React from 'react'
import { motion } from "framer-motion"

export function WhiteButton({ text, action = () => { } }) {
    return (
        <motion.button whileTap={{ scale: 0.85 }} onClick={action} className='btn btn-outline btn-xs border border-base-content/30 text-[14px] px-4 rounded-2xl text-black hover:bg-primary hover:border-none'>{text.toUpperCase()}</motion.button>
    )
}
export function BlueButton({ text, className }) {
    return (
        <motion.button whileTap={{ scale: 0.85 }} className={'btn btn-primary btn-xs border border-base-content/30 text-[14px] px-4 rounded-2xl ' + className}>{text.toUpperCase()}</motion.button>
    )
}
