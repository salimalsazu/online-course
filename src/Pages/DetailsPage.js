import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf'

const DetailsPage = () => {
    const courseName = useLoaderData();

    const { Price, about, certificate, duration, instructor, language, level, ratings, skills, title, title_other } = courseName;

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [14, 7]
    };

    return (
        <div className='px-5 lg:px-20 py-10' ref={ref} >
            <div className='flex flex-col justify-start items-start mb-10'>
                <div>
                    <h1 className='text-4xl font-extrabold lg:text-start '>{title}</h1>
                    <p className='font-extralight lg:text-start mt-3' >{title_other}</p>
                </div>
                <div className='mt-5 flex lg:flex-col lg:gap-0 gap-5'>
                    <p className='lg:text-start '> <span className='font-bold ' >Ratings:</span> <span className='text-yellow-600' >{ratings}</span> </p>
                    <p><span className='font-bold ' >Instructor:</span> {instructor}</p>
                </div>
                <div className='flex flex-col lg:flex-row mx-auto  lg:mx-0 gap-5 mt-5'>
                    <Link to={`/carts/${title}`} ><button className='bg-blue-800 text-white py-3 px-2 lg:px-10' >Get Premimum Access</button></Link>
                    <ReactToPdf targetRef={ref} filename="CourseInfo.pdf" options={options} x={.5} y={.5} scale={0.8}>
                        {({ toPdf }) => (
                            <button onClick={toPdf} className='border border-blue-800 text-blue-800 py-3 lg:px-10 p-2 lg:p-0'>DownLoad PDF Course</button>
                        )}
                    </ReactToPdf>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between border border-gray-500'>
                <div className='flex flex-col justify-center lg:items-start p-3'>
                    <p className='text-start mb-5' > <span className='font-bold' >Skills what you achive:</span> <span className='font-light'>{skills}</span></p>
                    <p className='font-light text-justify'>{about}</p>
                </div>
                <div className='lg:text-2xl font-extrabold text-gray-800  lg:p-10 lg:text-end'>
                    <p className="mb-2">{certificate}</p>
                    <p className="mb-2">{level}</p>
                    <p className="mb-2">{duration}</p>
                    <p className="mb-2">{language}</p>
                </div>
            </div>
            <div className='flex'>
                <h2 className='text-2xl font-bold text-start text-gray-700 mt-10'> Enroll Cost: ${Price}</h2>
            </div>
        </div >
    )
};

export default DetailsPage;