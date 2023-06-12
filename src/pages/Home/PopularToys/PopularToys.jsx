import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PopularToys = () => {
    const url = 'http://localhost:5000/alltoys'
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch((url), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-center text-4xl my-16'>Popular Toys</h2>
            {
                toys.filter(toy => toy.rating > 4.5).slice(0,3).map((toy, index) => <Card className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src={toy?.picture}
                            className="w-full h-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="flex items-center justify-between mb-2">
                            <Typography color="blue-gray" className="font-medium">
                                {toy?.name}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                {toy?.price}
                            </Typography>
                        </div>
                        <Typography variant="small" color="gray" className="font-normal opacity-75">
                            {toy?.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link to={`/toy/${toy._id}`}><Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                        >
                            View Details
                        </Button></Link>
                    </CardFooter>
                </Card>)
            }
        </div>
    );
};

export default PopularToys;