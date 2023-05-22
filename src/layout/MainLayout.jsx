import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>  
            <div style={{ minHeight: 'calc(100vh - 200px)' }} className="md">
                <Outlet></Outlet>
            </div>  
            <Footer></Footer>  
        </div>
    );
};

export default MainLayout;