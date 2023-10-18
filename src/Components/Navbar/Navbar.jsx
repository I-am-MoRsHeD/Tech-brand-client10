// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import darkMode from '../DarkMode/dark';
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user ? <>
                <li><NavLink to='/addproduct'>Add Product</NavLink></li>
                <li><NavLink to='/mycart'>My Cart</NavLink></li>
            </> : ''
        }
    </>

    const handleSignOut = () => {
        logoutUser()
            .then(() => {
                console.log('Logged out Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="navbar border-b-2 rounded-xl shadow-xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div>
                        <img className='w-32' src="https://i.ibb.co/jrjtf9j/logo.png" alt="" />
                    </div>
                    <div className='ml-4'>
                        <button onClick={darkMode} title='Dark Mode'>
                            <FaMoon></FaMoon>
                        </button>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p className='text-xl font-bold'>{user.displayName}</p>
                            <img className='w-12 rounded-full ml-2' src={user.photoURL} alt="" />
                            <button onClick={handleSignOut} className="btn btn-warning">LogOut</button>
                        </> :
                            <NavLink to='/login'><button className="btn btn-accent">Login</button></NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;