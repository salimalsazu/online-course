import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourseCard from './SingleCourseCard';

const AllCourseDetails = () => {
    const courseAll = useLoaderData();

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 mt-10 mx-3 lg:mx-0' >
                {
                    courseAll.map((card, index) => <SingleCourseCard card={card} key={index} ></SingleCourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCourseDetails;