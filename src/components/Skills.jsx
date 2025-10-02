import React from 'react';
import CardSkills from './CardSkills.jsx';
import { Braces, Code, Figma, FileJson2, GitCommitHorizontal } from 'lucide-react';
import { RiNextjsLine, RiReactjsLine } from '@remixicon/react';
import { motion } from "motion/react"

const Skills = () => {

    const skillsList = [
        { icon: Code, title: 'HTML', level: 'Experienced' },
        { icon: Braces, title: 'CSS', level: 'Experienced' },
        { icon: FileJson2, title: 'SASS/SCSS', level: 'Experienced' },
        { icon: Code, title: 'Java Script', level: 'Experienced' },
        { icon: RiReactjsLine, title: 'React JS', level: 'Experienced' },
        { icon: RiNextjsLine, title: 'Next JS', level: 'Experienced' },
        { icon: GitCommitHorizontal, title: 'Git', level: 'Experienced' },
        { icon: Figma, title: 'Figma', level: 'Experienced' }
    ]

    return (
        <section className='relative z-50 pt-16 pb-32 ' id='skills'>
            <div className="max-w-7xl mx-auto px-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    <h2 className='text-3xl font-bold text-accent text-center'>My skills</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-14 gap-7">
                    {skillsList.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}>
                            <CardSkills Icon={item.icon} title={item.title} level={item.level} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
