import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourseCard = ({ card }) => {

    const { title, skills, ratings, instructor, image, category, } = card;
    return (
        <div className="max-w-lg rounded-md shadow-sm bg-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
                    <p className="font-light text-lg"> Instructor: <span className='font-extrabold' >{instructor}</span></p>
                </div>
                <div>
                    <p className='text-gray-600'><span className='text-lg font-bold' >Skill What you Achive:</span> <span className='text-gray-800'>{skills}</span></p>
                </div>
                <div className='flex justify-between items-center px-5' >
                    <p> <span className='font-semibold' >Rating:</span> <span className='text-yellow-600' >{ratings}</span> </p>
                    <p> <span className='font-semibold' >Category:</span> <span className='text-yellow-600' >{category}</span></p>
                </div>
                <Link to={`/detail/${title}`} > <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-800 text-white hover:bg-blue-600 duration-500 ">Details</button></Link>
            </div>
        </div>
    );
};

export default SingleCourseCard;