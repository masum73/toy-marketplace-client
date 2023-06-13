import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/Bjvv5Nq/sandy-millar-nu-S2-GDp-CDo-I-unsplash.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Welcome to ToyTime, Where Imagination Comes to Life!
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Your one-stop destination for all things playtime! With a wide and captivating range of toys, we bring joy and imagination to children of all ages. Whether you're looking for classic favorites or the latest trends, we have an enchanting selection that will ignite their imagination and create magical memories
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link to='/alltoys'><Button size="lg" color="white">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/ckwLn2x/swansway-motor-group-l-RKba5m-GDac-unsplash.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            From Classic Favorites to the Latest Trends, Find the Perfect Toy.
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            We understand the importance of play in a child's development. That's why we curate toys that inspire creativity, foster learning, and promote hours of fun-filled entertainment. Our collection spans across various categories, from educational toys that encourage problem-solving skills to interactive games that promote social interaction and teamwork.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link to='/alltoys'><Button size="lg" color="white">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://i.ibb.co/VwgqT9G/chris-king-Vq-Lyo-Rjhiss-unsplash-1.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Join the Adventure of a Lifetime with Our Extraordinary Toys.
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Quality is our top priority. We carefully select toys from renowned brands known for their durability, safety, and innovation. Each toy undergoes rigorous testing to ensure it meets our strict standards, providing you with peace of mind as you browse our virtual shelves.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link to='/alltoys'><Button size="lg" color="white">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;