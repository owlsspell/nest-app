import Swiper from '../Swiper'
import AddSection from '../AddSection'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from 'react'

export default function Home() {

    const words = [
        "expertise", "experience", "proficiency", "skills"
        // "expertise", "", "experience", "", "proficiency", "", "skills"
    ]
    const [word, setWord] = useState(words[0])
    // const [visible, setVisible] = useState(true)

    let count = 0
    let visible = true
    function animateText() {

        console.log('count', count);
        console.log('visible', visible);
        if (count === words.length - 1) return count = 0
        count++
        setWord(words[count])
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            visible = false
            animateText()
            visible = true
        }, 2000)
        return (() => {
            clearInterval(intervalId)
        })
    }, [])


    return (
        <div className='container m-auto'>


            {/* hero */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse justify-between w-full p-0">
                    <img src="/images/hero.png" className="w-full md:w-2/4 lg:w-4/9" />
                    <div className='p-5 w-full md:w-2/4 lg:w-3/9'>
                        <h1 className="text-5xl md:text-3xl xl:text-5xl font-bold text-black text-center">Our{" "}
                            <motion.span className='text-primary'
                            // style={visible ? { opacity: 1 } : { opacity: 0 }}
                            // initial={{ opacity: 1 }}
                            // animate={{ opacity: 0 }}
                            // transition={{
                            //     duration: 2,
                            //     delay: 2,
                            //     repeat: Infinity,
                            //     repeatDelay: 2
                            // }}
                            // style={{ opacity: 0 }}
                            >
                                {word.split("").map((el, i) => (
                                    <motion.span
                                        className='inline-block'
                                        // style={i === count ? { opacity: 1 } : { opacity: 0 }}
                                        // style={{ opacity: 0 }}

                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: i / 10,
                                            // repeat: Infinity,
                                            // repeatDelay: 2
                                        }}
                                        key={i}

                                    >
                                        {el}{" "}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <br />
                            at your service</h1>
                    </div>
                </div>
            </div>

            {/* <div className='bg-gradient-to-b from-primary from-70% to-base-100 max-h-[800px] md:max-h-full h-[calc(100vh-125px)] grid grid-cols-1 lg:grid-cols-3 grid-rows-1 p-10'>
                <div className='col-span-1 md:col-span-2 my-auto md:p-10' >
                    <Swiper />
                </div>
                <div className='col-span-1 my-auto p-5 mr-5'>
                    <h1 className='text-2xl text-right md:text-6xl'>Book store</h1>
                    <p className='text-xl text-right mt-3'>Magic book app</p>
                </div>
            </div> */}
            {/* <AddSection /> */}
        </div>
    )
}
