import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import readers from '../Assets/Animation/72630-course-online.json'

const Hero = ({ heroItem }) => {
    const { title, description } = heroItem;
    return (
        <div className='flex flex-col  lg:flex-row items-center lg:mx-20 mt-10 '>
            <div className=' text-center lg:text-start'>
                <h1 className='text-gray-600 text-7xl font-extrabold'>{title}</h1>
                <p className='text-gray-500 text-lg font-light lg:w-3/5 mt-10 mb-10'>{description}</p>
                <div className='flex flex-col lg:flex-row mx-10 lg:mx-0 gap-5'>
                    <Link to='/blog' ><button className='bg-blue-800 text-white py-3 px-10' >Read Our Blog</button></Link>
                    <Link to='/course' ><button className='border border-blue-800 text-blue-800 py-3 px-5' >Join With Premimum</button></Link>
                </div>
            </div>
            <div>
                <Lottie animationData={readers} loop={true} />
            </div>
        </div>
    );
};

export default Hero;