import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseCategory from './CourseCategory';

const AllCourses = () => {
    return (
        <div className='flex flex-col lg:flex-row' >
            <aside className='h-screen lg:sticky lg:top-0 shadow-sm lg:m-10 m-3 bg-gray-100'>
                <CourseCategory></CourseCategory>
            </aside>
            <main className='mx-auto' >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AllCourses;