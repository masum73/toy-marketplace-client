import { Button, Card, Input, Typography } from '@material-tailwind/react';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);
    const [isEditable, setIsEditable] = useState(false);

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        

        const updateToy = {
            name,
            picture: photo,
            price,
            rating,
            subCategory,
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
                if(data.acknowledged){
                    setToy({...updateToy})
                    setIsEditable(false)
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
                        {isEditable ?
                            <Input defaultValue={toy?.picture} size="lg" type='url' name='photo' label="Photo URL" />
                            : <img className='w-fit' src={toy?.picture}></img>}

                        <Input disabled={!isEditable} defaultValue={toy?.name} size="lg" type='text' name='name' label="Name" />
                        <Input disabled={!isEditable} defaultValue={toy?.subCategory} size="lg" type='text' name='subCategory' label="Sub-Category" />
                        <Input disabled={!isEditable} defaultValue={toy?.price} size="lg" type='number' name='price' label="Price" />
                        <Input disabled={!isEditable} defaultValue={toy?.rating} size="lg" type='number' name='rating' label="Rating" />
                        <Input disabled={!isEditable} defaultValue={toy?.quantity} size="lg" type='number' name='quantity' label="Available Quantity" />
                        <Input disabled={!isEditable} defaultValue={toy?.description} size="lg" type='text' name='description' label="Detail Description" />
                    </div>
                    {isEditable === false && <Button onClick={() => setIsEditable(true)} className="mt-6" fullWidth>
                        Edit
                    </Button>}
                    {isEditable === true && <Button type='submit' className="mt-6" fullWidth>
                        Update
                    </Button>}
                </form>
            </Card>
        </div>
    );
};

export default ToyDetails;