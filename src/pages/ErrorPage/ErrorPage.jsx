import React from 'react';
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className='w-9/12 mx-auto my-36 grid grid-col justify-center items-center'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" width='600px' alt="" srcset="" />
            <Link className='text-blue-500 flex justify-center items-center text-center font-medium text-xl my-1' to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;