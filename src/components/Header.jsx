import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';
import {AlignJustify, ArrowUpRight, Moon, Sun} from 'lucide-react';
import { linksMenu } from "../data.js";

const Header = () => {

    const [isScroll, setIsScroll] = useState(false);
    const { changeTheme, themeColor } = useContext(ThemeContext)

    useEffect(() => {
        const activeBar = () => setIsScroll(window.scrollY > 100)
        window.addEventListener('scroll', activeBar)

        return () => {
            window.removeEventListener('scroll', activeBar)
        }
    }, [])

    return (
        <header className={isScroll ? 'fixed w-full py-3 z-90 bg-main duration-500' : 'fixed w-full py-3 z-90'}>
            <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">
                <a href="#" className='text-3xl text-accent relative'>
                    <p className='size-2 bg-[#E51111] rounded-full absolute -right-2 bottom-3'></p>
                    <span>Ryazanov</span>
                </a>
                <div className="hidden md:flex gap-x-20 text-accent py-3 px-6 rounded-full">
                    {linksMenu.map(link => {
                        return <a href={link.href} className='link'>{link.title}</a>
                    })}
                </div>
                <div className="flex items-center gap-x-2">
                    <button onClick={changeTheme} className='bg-accent rounded-full text-main p-3 cursor-pointer'>
                        {themeColor === 'light' ? <Moon /> : <Sun />}
                    </button>
                    <button className='bg-accent text-main rounded-full py-3 px-4 cursor-pointer flex gap-x-2'>Connect<ArrowUpRight /></button>
                </div>
                <button className={'md:hidden cursor-pointer'}>
                    <AlignJustify size={36} />
                </button>
            </div>
        </header>
    );
}

export default Header;
