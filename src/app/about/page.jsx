import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className='flex items-center justify-center gap-x-7 bg-red-50 p-4 mt-4'>
            <Link href={'about/history'}>History</Link>
            <Link href={'about/mission'}>Mission</Link>
        </div>
    );
};

export default About;