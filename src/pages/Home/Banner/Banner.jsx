import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

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
                            The Beauty of Nature
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that
                            quality of air that emanation from old trees, that so
                            wonderfully changes and renews a weary spirit.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
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
                            The Beauty of Nature
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that
                            quality of air that emanation from old trees, that so
                            wonderfully changes and renews a weary spirit.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
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
                            The Beauty of Nature
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            It is not so much for its beauty that the forest makes a claim
                            upon men&apos;s hearts, as for that subtle something, that
                            quality of air that emanation from old trees, that so
                            wonderfully changes and renews a weary spirit.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;