import React from 'react';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import PopularToys from '../PopularToys/PopularToys';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <PopularToys></PopularToys>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;