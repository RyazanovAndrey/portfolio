import React from 'react';
import { worksList } from '../data.js';
import CardWork from './CardWork.jsx';
import { motion } from "motion/react"

const Works = () => {

    return (
        <section className='relative py-16 z-50' id='works'>
            <div className="max-w-7xl mx-auto px-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    <h2 className='text-3xl font-bold text-accent text-center'>My works</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
                        {worksList.map((item, index) => (
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                                <CardWork {...item} />
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Works;
