import { AtSign, File, Linkedin, Mail, Send, Smartphone } from 'lucide-react';
import CardInfo from './CardInfo';
import { motion } from "motion/react"

const Home = () => {

    const homeIcon = [
        { icon: AtSign, title: 'ryazanov.andrej@gmail.com', link: 'mailto: ryazanov.andrej@gmail.com' },
        { icon: Send, title: 'Telegram', link: 'https://t.me/ryazanov_ag' },
        { icon: Smartphone, title: 'Call me', link: 'tel:+380673095451' },
        { icon: Linkedin, title: 'Linkedin', link: '' }
    ]

    return (
        <section className='relative min-h-[90vh] flex items-center justify-center '>
            <div className="absolute top-[-50%] right-[15%] w-[1000px] h-[1000px] opacity-60">
                <div className="circle-box"></div>
            </div>
            <div className="max-w-7xl mx-auto px-3">
                <div className="text-center space-y-5 flex flex-col items-center text-accent mt-50 relative z-50">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <img src="face.png" width={140} alt="" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <p className='text-xl'>Hello, I`m Ryazanov Andrey</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                        <h1 className='text-5xl font-bold'>front-end developer</h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                        <div className="flex gap-x-2 justify-center">
                        <a href='tel:+380673095451' className='flex gap-x-2 py-3 items-center px-6 rounded-full cursor-pointer bg-accent text-main hover:bg-main hover:text-accent duration-200'><Mail />connect with me</a>
                        <button className=' text-accent flex py-3 px-6 rounded-full cursor-pointer gap-x-2 bg-main/80'><File />my resume</button>
                    </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-50">
                    {homeIcon.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}>
                            <CardInfo Icon={item.icon} title={item.title} link={item.link} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;
