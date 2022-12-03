import React, { useEffect, useState } from 'react';
import ItemCategory from './ItemCategory';

const CourseCategory = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://courseserver.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])


    return (
        <div>
            <p className='border border-blue-600 px-12 py-3 text-xl text-blue-500 font-bold' >Explore</p>
            <div className='flex flex-col justify-center lg:items-start items-center gap-10 p-10' >
                {
                    category.map((items, index) => <ItemCategory items={items} key={index}  ></ItemCategory>)
                }

            </div>
        </div>
    );
};

export default CourseCategory;