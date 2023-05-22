import React from 'react';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='container mx-auto mt-16'>
            <Gallery></Gallery>
            <h2>Shop by Category</h2>
            <h2>Popular Products</h2>
            <h2>Testimonial Card</h2>
        </div>
    );
};

export default Home;