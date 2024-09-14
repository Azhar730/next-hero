import React from 'react';

const Slug = ({ params }) => {
    const {title,description} = blogs.find(blog=> blog.slug == params.slug)
    return (
        <div>
            <h1 className='text-xl font-bold'>{title}</h1>
            <h1 className='text-lg text-gray-600 font-semibold'>{description}</h1>
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
export default Slug;