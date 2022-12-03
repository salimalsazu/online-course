import React from 'react';
import Lottie from 'lottie-react';
import readers from './72582-congratulations.json'

const Congratulation = () => {
    return (
        <div className='mx-auto w-fit mt-10 lg:mt-0'>
            <Lottie animationData={readers} loop={true} />
            <p className='text-xl font-bold text-gray-800' >Wow !! You Enrolled our course</p>
        </div>
    );
};

export default Congratulation;