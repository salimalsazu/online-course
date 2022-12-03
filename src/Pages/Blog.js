import React from 'react';

const Blog = ({ items }) => {

    const { author, publish, question, ans } = items;

    return (
        <div>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-16">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-5xl font-bold leading-none"> {question}</h1>
                    <p className="text-sm">by
                        <a href="/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <span className='mr-3'> {author}</span>
                        </a>on
                        <time> {publish}</time>
                    </p>
                </div>
                <div className="text-justify">
                    <p>{ans}</p>
                </div>
            </article >


        </div >
    );
};

export default Blog;