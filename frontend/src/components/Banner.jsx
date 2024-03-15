import React from 'react'
import { motion } from "framer-motion"

export default function Banner() {
    return (
        <div className="bg-[url('/images/login-bg.png')] bg-center bg-cover no-repeat min-h-[600px] my-20 px-14 py-36">
            <motion.div className='text-secondary text-md w-full text-3xl w-1/2 inline-block font-semibold leading-normal mb-20'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 1000
                }}
            >
                Health always begins with a healthy life style. Being healthy will makes you happier.
            </motion.div>

            <div className='flex flex-wrap lg:flex-nowrap gap-6'>
                <div className='w-full lg:w-1/2 text-secondary flex'>
                    <motion.div className='w-1/2 text-8xl mt-4  mr-2'
                        initial={{ opacity: 0, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 1,
                        }}
                    >0.1</motion.div>
                    <motion.div>
                        <motion.div className='text-xl font-bold mb-4'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5, delay: 0.3
                            }}
                        >Health always with a healthy</motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5, delay: 0.6
                            }}
                        > joint replacement is a surgery to replace a
                            knee joint with a man-made artificial joint.</motion.p>
                    </motion.div>
                </div>
                <div className='w-full lg:w-1/2 text-secondary flex'>
                    <motion.div className='w-1/2 text-8xl mt-4 mr-4'
                        initial={{ opacity: 0, x: -50, y: -50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 1, delay: 0.9
                        }}
                    >0.2</motion.div>
                    <motion.div>
                        <motion.div className='text-xl font-bold mb-4'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5, delay: 1.2
                            }}
                        >Healthy will makes you happier</motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5, delay: 1.5
                            }}
                        > joint replacement is a surgery to replace a
                            knee joint with a man-made artificial joint.</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
