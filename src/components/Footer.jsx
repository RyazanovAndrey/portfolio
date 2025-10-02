import React from 'react';

const Footer = () => {

    const date = new Date()

    return (
        <footer className='py-4 relative z-50'>
            <div className="max-w-7xl mx-auto px-3 gap-x-2 flex justify-center">
                <div className="flex gap-x-2">
                    <p>&copy; {date.getFullYear()}</p>
                    <p className='text-accent'>Copyright Ryazanov Andrey</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
