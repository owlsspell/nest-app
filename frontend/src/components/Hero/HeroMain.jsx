import React from 'react'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'

export default function HeroMain() {
    const words = [
        "expertise", "experience", "proficiency",
    ]

    const [word, setWord] = useState(words[0])

    let count = 0
    function animateText() {
        if (count === words.length - 1) return count = 0
        count++
        setWord(words[count])
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            animateText()
        }, 3000)
        return (() => {
            clearInterval(intervalId)
        })
    }, [])

    return (

        <div className="hero bg-base-200" >
            <div className="hero-content flex-col md:flex-row-reverse justify-between w-full p-0">
                <img src="/images/hero.png" className="w-full md:w-2/4 lg:w-4/9" />
                <div className='p-5 w-full md:w-2/4 lg:w-3/9'>
                    <h1 className="text-5xl md:text-3xl xl:text-5xl font-bold text-black text-left xl:leading-normal">Our{" "}
                        <span className='text-primary'


                        >
                            {word.split("").map((el, i) => (
                                <motion.span
                                    className='inline-block'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                        delay: i / 20,
                                        repeat: Infinity,
                                        repeatDelay: 0.5,
                                        repeatType: "mirror",

                                    }}
                                    key={i}

                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </span>
                        <br />
                        at your service</h1>
                </div>
            </div>
        </div>
    )
}
