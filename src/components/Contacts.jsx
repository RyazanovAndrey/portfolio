import { AtSign, Linkedin, Send, Smartphone } from 'lucide-react';
import React from 'react';
import CardInfo from './CardInfo';
import { motion } from "motion/react"

const Contacts = () => {

    const homeIcon = [
        { icon: AtSign, title: 'ryazanov.andrej@gmail.com' },
        { icon: Send, title: 'Telegram' },
        { icon: Smartphone, title: 'Call me' },
        { icon: Linkedin, title: 'Linkedin' }
    ]

    return (
        <section className='py-16 relative z-50' id='contacts'>
            <div className="max-w-7xl mx-auto px-3">
                <h2 className='text-3xl font-bold text-accent text-center'>Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-50">
                    {homeIcon.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}>
                            <CardInfo Icon={item.icon} title={item.title} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contacts;
