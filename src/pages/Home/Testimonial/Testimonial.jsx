import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonial = () => {
    return (
        <div>
            <h2 className='text-center text-4xl my-16'>Customer Reviews</h2>
            <div className='flex gap-8 justify-center items-center my-5'>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Candice Wu
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                        I recently had the pleasure of discovering Toyland, and I must say, it has truly exceeded all my expectations as a toy buying website. From the moment I landed on their homepage, I was captivated by the colorful and inviting design, which set the perfect tone for a delightful shopping experience.
                        </Typography>
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1682999029155-d8b26349468f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            alt="candice wu"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Janice Jeffery
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Business woman</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                        Toy Time is a toy buying website that truly stands out from the rest. Their vast selection, commitment to quality, excellent customer service, and seamless shopping experience make them my go-to destination for all things playtime. If you're looking for a toy website that delivers on its promises and brings the magic of childhood to life, Toy Time is the place to be. 
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Testimonial;