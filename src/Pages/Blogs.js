import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog'
const Blogs = () => {

    const blogItem = useLoaderData();
    return (
        <div>
            {
                blogItem.map((items, index) => <Blog items={items} key={index} ></Blog>)
            }
        </div>
    );
};

export default Blogs;