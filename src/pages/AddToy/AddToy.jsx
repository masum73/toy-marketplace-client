import React, { useContext, useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;

        console.log(user.name);

        const addToy = {
            name,
            picture: photo,
            price,
            rating,
            subcategory,
            quantity,
            description,
            seller: {
                name: user.displayName,
                email: user.email
            }

        }
        console.log(addToy);
        fetch('https://toy-time-server-mcw3s2dri-masum73.vercel.app/alltoys', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'toy added successfully',
                        'success'
                      )
                      form.reset();
                }
            })






    }
    return (
        <div className='container mx-auto my-16'>
            <Helmet>
                <title>Toy Time | Add a Toy</title>
            </Helmet>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Add A Toy
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to add a toy.
                </Typography>
                <form onSubmit={handleAddToy} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" type='url' name='photo' label="Photo URL" />
                        <Input size="lg" type='text' name='name' label="Name" />
                        <div className="w-96">
                            <Select name='subcategory' label="Select Sub-Category">
                                <Option value='Sports Cars'>Sports Car</Option>
                                <Option value='Trucks'>Trucks</Option>
                                <Option value='Regular'>Regular Car</Option>
                            </Select>
                        </div>
                        {/* <Input size="lg" type='text' name='subCategory' label="Sub-Category" /> */}
                        <Input size="lg" type='number' name='price' label="Price" />
                        <Input size="lg" type='number' name='rating' label="Rating" />
                        <Input size="lg" type='number' name='quantity' label="Available Quantity" />
                        <Input size="lg" type='text' name='description' label="Detail Description" />
                    </div>
                    <label htmlFor="">Seller Name & Email</label>
                    
                    <Input size="lg" disabled defaultValue={user.displayName} type='text' name='sellerName' label="Seller Name" /> <br />
                    <Input size="lg" disabled defaultValue={user.email} type='text' name='sellerEmail' label="Seller Email" />
                    <Button type='submit' className="mt-6" fullWidth>
                        Add a Toy
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddToy;