import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import {  Card, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const TABLE_HEAD = ["Name", "Price", "Quantity","Description"," ", " "];

    const url = `http://localhost:5000/mytoys?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete successful');
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2 className='text-center text-4xl my-16'>My Toys</h2>
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head,index) => (
                                <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map(({ _id ,name, price, quantity,description }, index) => {
                            const isLast = index === toys.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={_id}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {price}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {quantity}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {description}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Link to={`/mytoys/edit/${_id}`}><Typography  variant="small" color="blue" className="font-medium">
                                            Edit
                                        </Typography></Link>
                                        
                                    </td>
                                    <td className={classes}>
                                        <Typography onClick={()=>handleDelete(_id)} variant="small" color="blue" className="font-medium cursor-pointer">
                                            Delete
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default MyToys;