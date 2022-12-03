import React from 'react';
import Lottie from 'lottie-react';
import reader from './error.json'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='mx-auto w-fit mt-10 lg:mt-0'>
            <div className='flex flex-col justify-center lg:justify-end items-end mr-3 lg:mr-0'>
                <button className='text-xl mt-5 mb-2 bg-black text-white px-4 py-2' onClick={() => navigate(-1)} > Back to Home</button>
                <p className='text-3xl font-extralight text-black' >404 ! Page Not Found</p>
            </div>
            <Lottie animationData={reader} loop={true} />
        </div >
    );
};

export default Error;