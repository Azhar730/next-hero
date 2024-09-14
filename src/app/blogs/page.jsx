import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    return (
        <div className='p-4 grid grid-cols-3 gap-5 h-screen'>
            {
                blogs.map(blog => <div key={blog.slug} className='w-96 h-60 p-2 border border-teal-600 rounded-md'>
                    <div className='flex flex-col justify-end'>
                        <div>
                            <h1 className='text-teal-800 text-xl font-semibold'>
                                {blog.slug}
                            </h1>
                            <h3 className='my-2 text-lg font-bold'>
                                {blog.title}
                            </h3>
                            <p className='text-lg text-gray-700 font-medium'>
                                {blog.description}
                            </p>
                        </div>
                        <div className='text-end'>
                            <Link href={`/blogs/${blog.slug}`} className='bg-teal-300 hover:bg-teal-500 p-2 rounded-md text-gray-800 font-semibold'>View Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

const blogs = [
    {
        "slug": "introduction-to-mern",
        "title": "Introduction to the MERN Stack",
        "description": "Learn the basics of the MERN stack, which includes MongoDB, Express.js, React, and Node.js."
    },
    {
        "slug": "react-best-practices",
        "title": "React Best Practices",
        "description": "Discover the best practices for writing clean and maintainable React code."
    },
    {
        "slug": "mongodb-performance-tips",
        "title": "MongoDB Performance Tips",
        "description": "Optimize your MongoDB queries and improve the performance of your database."
    },
    {
        "slug": "express-routing-basics",
        "title": "Express.js Routing Basics",
        "description": "A guide to setting up and using routing in Express.js applications."
    },
    {
        "slug": "nodejs-security-essentials",
        "title": "Node.js Security Essentials",
        "description": "Learn the essential security practices to protect your Node.js applications."
    }
]

export default Blogs;