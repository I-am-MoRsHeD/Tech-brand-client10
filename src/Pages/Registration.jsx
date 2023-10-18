// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Registration = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const { createUser, signWithPopUp, loading } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess('')
        setError('')

        if (loading) {
            return <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password must have a capital letter');
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError('Password must have a special character');
            return;
        }

        // create new user
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // updating users profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: 'https://i.ibb.co/NrhRkqN/profile2.jpg'
                })
                    .then(() => {
                        setSuccess('Profile Updated');
                    })
                    .catch(error => {
                        console.log(error);
                    })


                // send data to the server
                const user = { email, password }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            alert("user added")
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGoogle = () => {
        signWithPopUp()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='lg:w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-orange-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Create an account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input type="text" name="name" placeholder="Name" className="input" />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input type="email" name="email" placeholder="Email" className="input" required />
                        </div>
                        <div className="form-control border-b-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input" required />

                        </div>
                        <div>
                            {
                                error ? <p className='text-red-600'>{error}</p> : ''
                            }
                            {
                                success ? <p className='text-green-600'>{success}</p> : ''
                            }
                        </div>
                        <div className="form-control">
                            <button className="btn btn-warning">Create</button>
                        </div>
                        <div className='mt-2 font-semibold'>
                            <p>Already have an account? <Link className='font-semibold text-orange-500 underline' to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
                {/* PopUp componenets */}
                <div className='w-3/4 mt-8 mx-auto'>
                    <p className='text-center font-bold mb-5 text-2xl'>Or</p>
                    <div className='flex justify-start mt-2 rounded-full py-1 px-2 border-2 bg-slate-600 text-white border-red-600'>
                        <button onClick={handleGoogle} className='font-semibold p-2 flex items-center'>
                            <span className='md:mr-9 mr-14 lg:mr-24'><FaGoogle></FaGoogle></span> Continue With Google
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Registration;