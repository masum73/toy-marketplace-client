import React from 'react';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <h2>Popular Products</h2>
            <h2>Testimonial Card</h2>
        </div>
    );
};

export default Home;