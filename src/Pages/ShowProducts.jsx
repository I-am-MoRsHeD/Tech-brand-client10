// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
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

const ShowProducts = () => {
    const [product, setProduct] = useState('');

    const products = useLoaderData();
    const { brand } = useParams();

    useEffect(() => {
        const findProduct = products.filter(product => product.brand === brand)
        setProduct(findProduct)
    }, [brand])


    // for sliding left and right
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
        <div>
            {/* Slider */}
            <div className='max-w-6xl my-10 mx-auto w-full h-[70vh] py-10 px-4 relative'>
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
            {/* Products section */}
            <div className='my-16 bg-blue-600 rounded-t-full'>
                <h2 className="text-5xl p-5 font-bold text-center font-serif">Our Products</h2>
                <div className='grid grid-cols-1 gap-20 md:grid-cols-2 max-w-4xl my-5 pb-5  mx-auto'>
                    {
                        product ? product?.map(item => <div key={item._id} className="card w-96 bg-slate-300 shadow-xl">
                            <figure><img src={item.photo} alt="Shoes" /></figure>
                            <div className="card-body flex">
                                <h2 className="text-3xl flex-grow font-serif -mt-5 mb-3 text-center font-extrabold">{item.brand}</h2>
                                <h2 className="card-title font-bold">{item.name}</h2>
                                <div>
                                    <p>Price: Tk. <span className='font-bold'>{item.price}</span></p>
                                    <p>Ratings: <span className='font-bold'>{item.rating}</span> Stars</p>
                                </div>
                                <div className="card-actions justify-between">
                                    <Link to={`/details/${item._id}`}>
                                        <button className="btn btn-warning">See Details</button>
                                    </Link>
                                    <Link to={`/update/${item._id}`}>
                                        <button className="btn btn-accent">Update Info</button>
                                    </Link>
                                </div>
                            </div>
                        </div>) :
                            <div className='flex justify-center items-center h-[100vh]'>
                                <div>
                                    <p className="text-5xl">Sorry..!There is no available product..!</p>
                                    <p className="text-5xl font-semibold">When it will arrive,we will let you know..!</p>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowProducts;