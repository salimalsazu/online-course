import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Carts = () => {

    const allCarts = useLoaderData();

    const { title, image, Price, category } = allCarts;

    return (
        <div className="flex flex-col  max-w-3xl p-6 space-y-4 mx-auto mt-20 sm:p-10 bg-blue-200">
            <h2 className="text-xl font-semibold underline">Checkout Page</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32" src={image} alt="" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-semibold leading-snug sm:pr-8">{title}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">${Price}.00</p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">

                            </div>
                        </div>
                    </div>
                </li>

            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">${Price}.00</span>
                </p>
                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex gap-3 lg:gap-0 flex-row justify-end space-x-4">
                <Link to={`/course/${category}`} ><button type="button" className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 lg:px-10">Back
                    <span className="sr-only sm:not-sr-only"> to shop</span>
                </button></Link>
                <Link to='/congrats' ><button type="button" className=" bg-blue-800 hover:bg-blue-700  text-white py-3 px-5 lg:px-10">
                    <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                </button></Link>
            </div>
        </div>
    );
};

export default Carts;