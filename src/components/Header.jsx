import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeProvider.jsx';
import { AlignJustify, Moon, Sun, X } from 'lucide-react';
import { linksMenu } from "../data.js";

const Header = () => {

    const [isScroll, setIsScroll] = useState(false);
    const { changeTheme, themeColor } = useContext(ThemeContext)
    const [isOpenModile, setIsOpenModile] = useState(false)
    true
    useEffect(() => {
        const activeBar = () => setIsScroll(window.scrollY > 100)
        window.addEventListener('scroll', activeBar)

        return () => {
            window.removeEventListener('scroll', activeBar)
        }
    }, [])

    return (
        <header className={isScroll ? 'fixed w-full py-3 z-90 bg-main duration-500 shadow-2xl/8' : 'fixed w-full py-3 z-90'}>
            <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">
                <a href="#" className='text-3xl text-accent relative'>
                    <p className='size-2 bg-[#E51111] rounded-full absolute -right-2 bottom-3'></p>
                    <span>Ryazanov</span>
                </a>
                <div className="hidden md:flex gap-x-20 text-accent py-3 px-6 rounded-full">
                    {linksMenu.map(link => {
                        return <a href={link.href} className='text-lg link'>{link.title}</a>
                    })}
                </div>
                <div className="flex items-center gap-x-2">
                    <button onClick={changeTheme} className='bg-accent rounded-full text-main p-3 cursor-pointer'>
                        {themeColor === 'light' ? <Moon /> : <Sun />}
                    </button>
                </div>
                {isOpenModile ? (
                    <button className={'md:hidden cursor-pointer'} onClick={() => setIsOpenModile(!isOpenModile)}>
                        <X size={36} />
                    </button>
                ) : (
                    <button className={'md:hidden cursor-pointer'} onClick={() => setIsOpenModile(!isOpenModile)}>
                        <AlignJustify size={36} />
                    </button>
                )}
                {isOpenModile && (
                    <div className='absolute top-[99%] left-0 w-full bg-white shadow-2xl/10'>
                        {linksMenu.map(link => (
                            <a onClick={() => setIsOpenModile(false)} href={link.href} className='block p-4 text-2xl'>{link.title}</a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
