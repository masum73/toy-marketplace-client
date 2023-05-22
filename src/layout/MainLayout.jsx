import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';
import Banner from '../pages/Home/Banner/Banner';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>  
            <div style={{ minHeight: 'calc(100vh - 200px)' }} className="md">
                <Outlet></Outlet>
            </div>  
            <Footer></Footer>  
        </div>
    );
};

export default MainLayout;