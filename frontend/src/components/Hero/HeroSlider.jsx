import React from 'react'
import { motion } from "framer-motion"

export default function HeroSlider() {
    return (
        <div className="hero bg-base-200 my-10 " >
            <div className="hero-content flex-col md:flex-row justify-between w-full h-full p-0 items-start">
                <motion.img src="/images/slider/bruno-rodrigues.png" alt="" className="w-full md:w-2/4 lg:w-4/9"
                    initial={{ opacity: 0, x: "-100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} />

                <div className='sm:px-0 px-5 w-full md:w-2/4 lg:w-3/9 flex flex-col h-full overflow-hidden'>
                    <h1 className="text-5xl md:text-3xl xl:text-5xl font-bold text-black text-left font-black xl:leading-normal"> Replacement {" "}
                        <br />
                        {"Surgery".split("").map((el, i) => (
                            <motion.span className='text-primary inline-block'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.25,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}

                        {" "}
                        Procedure</h1>
                    <p className='text-lg my-5'>
                        Knee joint replacement is a surgery to
                        replace a knee joint with a man-made artificial joint.</p>
                    <div className='flex gap-6 mb-0 mt-auto'>
                        <motion.img src="/images/slider/slider2.png" className='object-cover' alt=""
                            initial={{ opacity: 0, x: "100%" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        {/* <img src="/images/slider/slider2.png" className='object-cover' alt="" /> */}
                        {/* <img src="/images/slider/slider1.png" className='object-cover hidden lg:block ' alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
