import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourseCard from './SingleCourseCard';

const CourseCard = () => {

    const allCards = useLoaderData();


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 lg:p-10 p-4 '>
            {
                allCards.map((card, index) => <SingleCourseCard card={card} key={index} ></SingleCourseCard>)
            }
        </div >
    );
};

export default CourseCard;