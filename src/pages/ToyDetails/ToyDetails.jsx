import { Button, Card, Input, Typography } from '@material-tailwind/react';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;



        const updateToy = {

            price,
            quantity,
            description

        }
        console.log(updateToy);
        fetch(`http://localhost:5000/mytoys/toy/${id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setToy({ ...updateToy })
                    alert('toy updated successfully');
                }


            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/toy/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToy(data)
            })
    }, [])
    return (
        <div className='container mx-auto my-16'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Toy Details
                </Typography>

                <form onSubmit={handleUpdateToy} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input defaultValue={toy?.price} size="lg" type='number' name='price' label="Price" />
                        <Input defaultValue={toy?.quantity} size="lg" type='number' name='quantity' label="Available Quantity" />
                        <Input defaultValue={toy?.description} size="lg" type='text' name='description' label="Detail Description" />
                    </div>
                    
                    <Button type='submit' className="mt-6" fullWidth>
                        Update
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ToyDetails;