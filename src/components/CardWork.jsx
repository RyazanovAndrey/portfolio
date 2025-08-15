import React from 'react';

const CardWork = ({ image, title, desc, stack, link }) => {
    return (
        <div className='relative top-0 cursor-pointer border rounded-3xl border-grey-line overflow-hidden bg-main/60 hover:-top-1 duration-200'>
            <img className='mb-5 grayscale object-cover' src={image} width={400} alt={image} />
            <div className="space-y-5 p-5">
                <p className='text-2xl text-accent'>{title}</p>
                <p className='text-[#CECECE]'>{desc}</p>
                <div className="flex gap-x-2">
                    {stack.map(item => (
                        <div className="border-grey-line border py-2 px-4 rounded-full text-accent">{item}</div>
                    ))}
                </div>
                <a href={link} target={"_blank"} className='bg-accent text-main py-2 px-4 inline-block rounded-full'>Demo</a>
            </div>
        </div>
    );
}

export default CardWork;
