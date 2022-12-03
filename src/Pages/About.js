import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsAndAns from './QuestionsAndAns';

const About = () => {

    const faq = useLoaderData();

    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div>
                {
                    faq.map((ansItem, index) => <QuestionsAndAns ansItem={ansItem} key={index} ></QuestionsAndAns>)
                }
            </div>
        </div>
    );
};

export default About;