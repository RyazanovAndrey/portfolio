import React from 'react';

const CardInfo = ({ Icon, title, link }) => {
    return (
        <a href={link} className='relative top-0 flex items-center border border-grey-line rounded-full p-3 gap-x-5 cursor-pointer hover:-top-1 duration-200 bg-main/60'>
            <div className="bg-accent rounded-full text-main p-2">
                <Icon />
            </div>
            <p className='text-accent'>{title}</p>
        </a>
    );
}

export default CardInfo;
