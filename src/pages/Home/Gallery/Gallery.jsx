import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const url = 'https://toy-time-server-masum73.vercel.app/alltoys'
    const [toys, setToys] = useState([])
    useEffect(() => {
        AOS.init();
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
        <div >
            <h2 className='text-center text-4xl my-16'>Gallery</h2>

            <figure data-aos="flip-left" className='flex gap-3 mx-3'>
                {
                    toys.slice(0,4).map((toy, index) => <img key={index}
                        className="h-1/4 w-1/4 rounded-lg"
                        src={toy.picture}
                        alt="nature image"
                    />)
                }

            </figure>

            <figure data-aos="flip-right" className='flex gap-3 mt-3 mx-3'>

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