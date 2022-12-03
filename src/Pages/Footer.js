import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center lg:justify-end items-center lg:mr-24 mt-72 mb-5'>
            <h1>Salim Al Sazu @ {new Date().getFullYear()}  All rights reserved.</h1>
        </div>
    );
};

export default Footer;