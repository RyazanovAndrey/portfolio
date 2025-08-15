import React from 'react';
import { motion } from "motion/react"

const About = () => {
    return (
        <section className='py-52' id='about'>
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className="md:min-w-[400px]">
                            <img src="about.png" alt=""/>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <div className="">
                            <h2 className='text-3xl font-bold text-accent'>About me</h2>
                            <p className='text-[#A8A7A7] mt-14 text-lg'>I am a web developer. I am developing a web application for various fields of activity. I love to create beautiful web applications that not only work and make a profit, but also delight the user's eye.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;
