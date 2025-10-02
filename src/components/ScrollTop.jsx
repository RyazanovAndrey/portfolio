import React, {useEffect, useState} from 'react';
import {MoveUp} from "lucide-react";

function ScrollTop() {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const showBtn = () => setIsShow(window.scrollY > document.documentElement.clientHeight)
        window.addEventListener('scroll', showBtn)

        return() => {
            window.removeEventListener('scroll', showBtn)
        }
    }, []);
    
    return (
        <>
            {isShow && (
                <a href={'#'} className={'fixed z-50 bottom-2 right-2 bg-accent p-2 rounded-full cursor-pointer text-main'}>
                    <MoveUp />
                </a>
            )}
        </>
    );
}

export default ScrollTop;