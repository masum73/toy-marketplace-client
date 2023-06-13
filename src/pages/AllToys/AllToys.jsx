import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

const AllToys = () => {
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
            <h2 className='text-center text-4xl my-16'>All Toys</h2>
            <div className='container mx-auto my-16 grid grid-cols-3 gap-8 justify-center items-center'>
                {
                    toys.map((toy, index) => <Card key={index} className="mt-6 w-96">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img src={toy.picture} alt="img-blur-shadow" layout="fill" />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {toy.name}
                            </Typography>
                            <Typography>
                                Seller Name: {toy.seller.name}
                            </Typography>
                            <Typography>
                                Sub-Category: {toy.subcategory}
                            </Typography>
                            <Typography>
                                Price: ${toy.price}
                            </Typography>
                            <Typography>
                                Quantity: {toy.quantity}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to={`/toy/${toy._id}`}><Button >View Details</Button></Link>
                        </CardFooter>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default AllToys;