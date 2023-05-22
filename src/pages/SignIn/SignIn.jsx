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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrors('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire(
                    'Good job!',
                    'User Login Successful',
                    'success'
                )
                setErrors('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setErrors(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container flex justify-center items-center mx-auto my-16'>
            <Card className="w-96">
                <form onSubmit={handleLogin}>
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Login Yourself
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" type='email' name='email' size="lg" />
                        <Input label="Password" type='password' name='password' size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type='submit' variant="gradient" fullWidth>
                            Sign In
                        </Button>
                        <Button onClick={handleGoogleSignIn} className='my-3' variant="gradient" fullWidth>
                            Sign In with Google
                        </Button>
                        <div className="text-green-500">
                            {success}
                        </div>
                        <div className="text-red-500">
                            {errors}
                        </div>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don't have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                <Link to='/signup'>Sign Up</Link>
                            </Typography>
                        </Typography>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default SignIn;