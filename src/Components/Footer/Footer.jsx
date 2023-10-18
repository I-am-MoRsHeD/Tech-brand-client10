// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='bg-black h-[120vh] text-white'>
            <div className='pt-10'>
                <h2 className="text-2xl mb-3 font-mono text-center">Get In Touch</h2>
                <div className='hover:border hover:border-white rounded-lg shadow-lg h-20 bg-gradient-to-b from-black to-stone-400  w-1/2 mx-auto'>
                    <div className='flex justify-center items-center h-full'>
                        <FiMail></FiMail>
                        <h4 className="text-lg">: techm&h.gmail.com</h4>
                    </div>
                </div>
            </div>

            <h2 className="text-lg text-center my-12">Social Links</h2>
            <div className='flex justify-around gap-8 w-full'>
                <div className='w-1/2'>
                    <div className='hover:border hover:border-white rounded-lg shadow-lg h-20 bg-gradient-to-b from-black to-stone-400 mx-auto'>
                        <div className='flex justify-center items-center h-full'>
                            <FiInstagram></FiInstagram>
                            <h4 className="text-xl font-semibold ml-2"> Instagram</h4>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='hover:border hover:border-white rounded-lg shadow-lg h-20 bg-gradient-to-b from-black to-stone-400 mx-auto'>
                        <div className='flex justify-center items-center h-full'>
                            <ImFacebook2></ImFacebook2>
                            <h4 className="text-lg ml-2 font-semibold">Facebook</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className="text-9xl font-mono text-orange-400 text-center">
                    <span>M</span>
                    <span className='ml-5'>&</span>
                    <span className='ml-5'>H</span>
                    <span className='ml-10'>TECH</span>
                    </h2>
            </div>
            <div>
                <footer className="mt-24 footer footer-center p-4 text-base-content">
                    <aside>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;