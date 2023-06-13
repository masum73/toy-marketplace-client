import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";


const ShopCategory = () => {
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
            <h1 className='text-center text-4xl my-16'>Shop by Category</h1>
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Sports Cars</Tab>
                            <Tab>Trucks</Tab>
                            <Tab>Regular Cars</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3 gap-8 justify-center items-center'>
                                {
                                    toys.filter(toy => toy.subcategory === 'Sports Cars').map((toy, index) => <Card className="w-96">
                                        <CardHeader shadow={false} floated={false} className="h-96">
                                            <img
                                                src={toy?.picture}
                                                className="w-full h-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <div className="flex items-center justify-between mb-2">
                                                <Typography color="blue-gray" className="font-bold">
                                                    {toy?.name}
                                                </Typography>
                                                <Typography color="blue-gray" className="font-bold">
                                                    ${toy?.price}
                                                </Typography>
                                            </div>
                                            <Typography variant="small" color="gray" className="font-normal opacity-75">
                                                {toy?.description}
                                            </Typography>
                                            <Typography variant="large" color="black" className="font-bold opacity-75">
                                                Rating: {toy?.rating}
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
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 gap-8 justify-center items-center'>
                                {
                                    toys.filter(toy => toy.subcategory === 'Trucks').map((toy, index) => <Card className="w-96">
                                        <CardHeader shadow={false} floated={false} className="h-96">
                                            <img
                                                src={toy?.picture}
                                                className="w-full h-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <div className="flex items-center justify-between mb-2">
                                                <Typography color="blue-gray" className="font-bold">
                                                    {toy?.name}
                                                </Typography>
                                                <Typography color="blue-gray" className="font-bold">
                                                    ${toy?.price}
                                                </Typography>
                                            </div>
                                            <Typography variant="small" color="gray" className="font-normal opacity-75">
                                                {toy?.description}
                                            </Typography>
                                            <Typography variant="large" color="black" className="font-bold opacity-75">
                                                Rating: {toy?.rating}
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
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 gap-8 justify-center items-center'>
                                {
                                    toys.filter(toy => toy.subcategory === 'Regular').map((toy, index) => <Card className="w-96">
                                        <CardHeader shadow={false} floated={false} className="h-96">
                                            <img
                                                src={toy?.picture}
                                                className="w-full h-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <div className="flex items-center justify-between mb-2">
                                                <Typography color="blue-gray" className="font-bold">
                                                    {toy?.name}
                                                </Typography>
                                                <Typography color="blue-gray" className="font-bold">
                                                    ${toy?.price}
                                                </Typography>
                                            </div>
                                            <Typography variant="small" color="gray" className="font-normal opacity-75">
                                                {toy?.description}
                                            </Typography>
                                            <Typography variant="large" color="black" className="font-bold opacity-75">
                                                Rating: {toy?.rating}
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
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ShopCategory;