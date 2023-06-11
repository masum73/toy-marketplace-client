import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Link, useParams } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/mytoys?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [])

    return (
        <div>
            <h2 className='text-center text-4xl my-16'>My Toys</h2>
            {
                toys.map(toy => <Card key={toy._id} className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src={toy.picture}
                            className="w-full h-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="flex items-center justify-between mb-2">
                            <Typography color="blue-gray" className="font-medium">
                                {toy.name}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                ${toy.price}
                            </Typography>
                        </div>
                        <Typography variant="small" color="gray" className="font-normal opacity-75">
                            {toy.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Link to={`/mytoys/${toy._id}`}><Button
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

export default MyToys;