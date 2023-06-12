import React, { useContext } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { AuthContext } from '../../provider/AuthProvider';


const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
        console.log(user.name);
        
        const addToy = {
            name,
            picture: photo,
            price,
            rating,
            subcategory: subCategory,
            quantity,
            description,
            seller: {
                name: user.displayName,
                email: user.email
            }

        }
        console.log(addToy);
        fetch('http://localhost:5000/alltoys', {
            
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then (res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('toy added successfully');
            }
        })






    }
    return (
        <div className='container mx-auto my-16'>
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
                        <Input size="lg" type='text' name='subCategory' label="Sub-Category" />
                        <Input size="lg" type='number' name='price' label="Price" />
                        <Input size="lg" type='number' name='rating' label="Rating" />
                        <Input size="lg" type='number' name='quantity' label="Available Quantity" />
                        <Input size="lg" type='text' name='description' label="Detail Description" />
                    </div>
                    <Button type='submit' className="mt-6" fullWidth>
                        Add a Toy
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddToy;