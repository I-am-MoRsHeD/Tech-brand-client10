// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ErrorPage = () => {
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    return (
        <div className='flex justify-center h-[100vh] items-center'>
            <div>
                <p>404 Error...! <br />
                page not found..!</p>
            </div>
        </div>
    );
};

export default ErrorPage;