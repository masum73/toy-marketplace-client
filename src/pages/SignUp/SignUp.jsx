import React, { useContext, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState('')

    const handleRegister = (event) => {
        setSuccess('');
        let errors = [];

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        if (name.length === 0) {
            errors.push('You must need to enter your name');
            
        }
        if (email.length === 0) {
            errors.push('You must need to enter your email');
            
        }
        if (password.length < 6) {
            errors.push('Please add at least 6 characters in your password')
            
        }
        setErrors(errors)

        if (errors.length > 0) {
            return
        }

        createUser(email, password)
            .then(result => {
                
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(name, photo)
                form.reset();
                Swal.fire(
                    'Good job!',
                    'Registration Successful',
                    'success'
                  )
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='container flex justify-center items-center mx-auto my-16'>
            <Card className="w-96">
                <form onSubmit={handleRegister} >
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Register Yourself
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Name" type='text' name='name' size="lg" />
                        <Input label="Email" type='email' name='email' size="lg" />
                        <Input label="Password" type='password' name='password' size="lg" />
                        <Input label="Photo URL" type='url' name='photo' size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type='submit' variant="gradient" fullWidth>
                            Sign Up
                        </Button>
                        <div className="text-green-500">
                            {success}
                        </div>
                        <div className="text-red-500">
                            {
                                errors.map((e, index) => <p key={index} >{e}</p>)
                            }
                        </div>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Typography
                                as="a"
                                href="#signin"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                <Link to='/signin'>Sign In</Link>
                            </Typography>
                        </Typography>
                    </CardFooter>
                </form>

            </Card>
        </div>
    );
};

export default SignUp;