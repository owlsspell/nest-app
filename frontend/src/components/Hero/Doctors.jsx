import React from 'react'
import { motion } from "framer-motion"

export default function Doctors() {
    return (
        <div className="hero bg-base-200 my-10" >
            <div className="hero-content flex-col lg:flex-row justify-between w-full h-full p-0 items-start">
                <div className="w-full lg:w-2/4">
                    <div className='relative'>
                        <img src="/images/doctors/doctors1.png" alt="" />
                        <div className='absolute bg-blue-200/40 h-28 w-full md:w-5/6 lg:w-full 2xl:w-10/12 bottom-0 backdrop-blur-sm py-5 px-4 md:px-10 lg:px-6 xl:px-16  text-right '>
                            <motion.span className='text-black font-semibold text-lg'
                                initial={{ opacity: 0, }}
                                whileInView={{ opacity: 1, }}
                                transition={{
                                    duration: 1, delay: 0.5
                                }}
                            >joint replacement is a surgery to <br />
                                replace a knee joint with a man-made <br /> artificial joint.</motion.span>
                        </div>
                    </div>
                    <motion.h3 className="text-4xl md:text-4xl xl:text-5xl font-bold text-left my-6 px-4 md:px-0"
                        initial={{ y: -50, opacity: 0, }}
                        whileInView={{ y: 0, opacity: 1, }}
                        transition={{
                            duration: 0.5
                        }}
                    // viewport={{ once: true }}
                    >Health always with
                        a healthy life style</motion.h3>
                </div>
                {/* <div className='w-full md:w-2/4 flex flex-col h-full'> */}
                <div className="w-full lg:w-2/4 flex flex-col-reverse lg:flex-col">
                    <motion.h3 className="text-4xl md:text-4xl xl:text-5xl font-bold text-left my-6 text-right"
                        initial={{ y: 50, opacity: 0, }}
                        whileInView={{ y: 0, opacity: 1, }}
                        transition={{
                            duration: 0.5
                        }}
                    >Being healthy will
                        makes you happier</motion.h3>
                    <div className='relative'>
                        <div className='absolute right-0 bg-blue-200/40 h-28 w-full md:w-5/6 lg:w-full 2xl:w-10/12 bottom-0 backdrop-blur-sm py-5 px-4 md:px-10 lg:px-6 xl:px-16  text-right '>
                            <motion.span className='text-black font-semibold text-lg'
                                initial={{ opacity: 0, }}
                                whileInView={{ opacity: 1, }}
                                transition={{
                                    duration: 1, delay: 0.5
                                }}
                            >joint replacement is a surgery to
                                replace a knee joint with a man-made artificial joint.</motion.span>
                        </div>
                        <img src="/images/doctors/doctors2.png" alt="" className='mr-0 ml-auto' />
                    </div>
                </div>
                {/* <h1 className="text-5xl md:text-3xl xl:text-5xl font-bold text-black text-left font-black xl:leading-normal"> Replacement {" "}
                        <br />
                        <span className='text-primary'>
                            Surgery
                        </span>

                        {" "}
                        Procedure</h1>
                    <p className='text-lg my-5'>
                        Knee joint replacement is a surgery to
                        replace a knee joint with a man-made artificial joint.</p> */}

                {/* </div> */}
            </div>
        </div>
    )
}
