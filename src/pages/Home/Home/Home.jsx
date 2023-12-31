import React from 'react';
import Gallery from '../Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import PopularToys from '../PopularToys/PopularToys';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Toy Time | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='container mx-auto'>
                <Gallery></Gallery>
                <ShopCategory></ShopCategory>
                <PopularToys></PopularToys>
                <Testimonial></Testimonial>
            </div>
        </div>

    );
};

export default Home;