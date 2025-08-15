import React from 'react';

const CardSkills = ({ Icon, title, level }) => {

    return (
        <div className='relative top-0 border-grey-line border rounded-2xl p-6 cursor-pointer bg-main/60 hover:-top-1 duration-200'>
            <div className="bg-accent text-main p-2 inline-block rounded-full border">
                <Icon />
            </div>
            <p className='text-accent'>{title}</p>
            <p className='text-[#CECECE]'>{level}</p>
        </div>
    );
}

export default CardSkills;
