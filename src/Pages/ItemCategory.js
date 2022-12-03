import React from 'react';
import { Link } from 'react-router-dom';

const ItemCategory = ({ items }) => {
    const { category } = items;
    return (
        <div>
            <Link to={`/course/${category}`} className="text-xl font-bold py-3 px-6 hover:bg-gray-600 hover:text-lime-200 hover:font-bold duration-200" ><button >{category}</button> </Link>
        </div>
    );
};

export default ItemCategory;
