// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const shops = [
    {
        url: 'https://i.ibb.co/BN0VgyL/shop1.jpg',
    },
    {
        url: 'https://i.ibb.co/cxXNtbR/shop2.jpg'
    },
    {
        url: 'https://i.ibb.co/wdw0D7N/shop3.jpg'
    }
]

const Branch = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newSlide = isFirstSlide ? shops.length - 1 : currentIndex - 1;
        setCurrentIndex(newSlide);
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === shops.length - 1;
        const newSlide = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newSlide)
    }
    return (
        <div className='my-5'>
            <h2 className="text-5xl text-center font-bold">Our Branches</h2>
            <h2 className="text-5xl mt-5 text-center font-bold"> Have a visit..!It will be Honour for Us..!</h2>
            <div className='max-w-6xl my-10 mx-auto w-full h-[100vh] py-10 px-4 relative'>
                <div
                    style={{ backgroundImage: `url(${shops[currentIndex]?.url})` }}
                    className='w-full h-full rounded-xl bg-center bg-cover duration-500'
                >
                    {/* left arrow */}
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
                        <AiOutlineArrowLeft onClick={prevSlide} size={30}></AiOutlineArrowLeft>
                    </div>
                    {/* right arrow */}
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
                        <AiOutlineArrowRight onClick={nextSlide} size={30}></AiOutlineArrowRight>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Branch;