import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input
} from "@material-tailwind/react";
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const url = 'http://localhost:5000/alltoys'
    const [toys, setToys] = useState([])
    const [toyName, setToyName] = React.useState("");
    const onChange = ({ target }) => {
        setToyName(target.value)
        fetch((url + `?q=${target.value}`), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    };

    useEffect(() => {
        fetch((url + '?limit=true'), {
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
            <Helmet>
                <title>Toy Time | All Toys</title>
            </Helmet>
            <h2 className='text-center text-4xl my-16'>All Toys</h2>
            <div className="relative flex w-full max-w-[24rem] mx-auto">
                <Input
                    type="text"
                    label="Search Toy Name"
                    value={toyName}
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />

            </div>
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