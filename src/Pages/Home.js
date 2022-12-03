import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';

const Home = () => {

    const heroSection = useLoaderData();

    return (
        <div>
            {
                heroSection.map((heroItem, index) => <Hero heroItem={heroItem} key={index} ></Hero>)
            }
        </div>
    );
};

export default Home;