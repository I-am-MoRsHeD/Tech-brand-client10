// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div
            style={{ height: ["100vh"] }}
            className="bg-[url('https://i.ibb.co/mqwntFD/background3.jpg')] bg-cover overflow-x-hidden my-10">

            <div className=' flex items-center justify-around w-5/6 mx-auto h-[100vh]'>
                <div className='text-white space-y-5'>
                    <p className="text-xl font-semibold">3 YEARS WARRANTY</p>
                    <h1 className="text-6xl font-bold">All Tech & <br />
                    Electronic Gadgets <br />
                    Here!</h1>
                    <p className='font-semibold'>On Sale <span className='text-red-500'>45% OFF</span></p>
                </div>
                <div>
                    <img className='w-96' src="https://i.ibb.co/vZCjMzJ/accessories.webp" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;