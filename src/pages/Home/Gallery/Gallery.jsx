import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const url = 'http://localhost:5000/alltoys'
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch((url), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data.slice(0, 9));
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl my-16'>Gallery</h2>

            <figure className='flex gap-3'>
                {
                    toys.slice(0,4).map((toy, index) => <img key={index}
                        className="h-1/4 w-1/4 rounded-lg"
                        src={toy.picture}
                        alt="nature image"
                    />)
                }

            </figure>

            <figure className='flex gap-3 mt-3'>

                {
                    toys.slice(4,8).map((toy, index) => <img key={index}
                        className="h-1/4 w-1/4 rounded-lg"
                        src={toy.picture}
                        alt="nature image"
                    />)
                }
            </figure>
        </div>


    );
};

export default Gallery;