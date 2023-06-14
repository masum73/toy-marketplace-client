import { Button, Card, Input, Textarea, Typography } from '@material-tailwind/react';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyDetails = ({ edit }) => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);


    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
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
                    Swal.fire(
                        'Good job!',
                        'Toy update successful',
                        'success'
                      )
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
                        {edit === false && <img className='w-fit' src={toy?.picture}></img>
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.name} type='text' name='name' label="Name" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.seller?.name} type='text' name='sellerName' label="Seller Name" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.seller?.email} type='text' name='SellerEmail' label="Seller Email" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.subcategory} type='text' name='subCategory' label="Sub Category" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.price} type='number' name='price' label="Price" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.rating} type='number' name='rating' label="Rating" />
                        }
                        {edit === false && <Input size="lg" defaultValue={toy?.quantity} type='number' name='quantity' label="Quantity" />
                        }
                        {edit === false && <Textarea size="lg" defaultValue={toy?.description} type='text' name='description' label="Description" />
                        }
                        {
                            edit === true && <Input disabled={!edit} defaultValue={toy?.price} size="lg" type='number' name='price' label="Price" />
                        }
                        {
                            edit === true && <Input disabled={!edit} defaultValue={toy?.quantity} size="lg" type='number' name='quantity' label="Available Quantity" />
                        }

                        {
                            edit === true && <Textarea disabled={!edit} defaultValue={toy?.description} size="lg" type='text' name='description' label="Detail Description" />
                        }
                    </div>

                    {
                        edit && <Button type='submit' className="mt-6" fullWidth>
                            Update
                        </Button>
                    }
                </form>
            </Card>
        </div>
    );
};

export default ToyDetails;