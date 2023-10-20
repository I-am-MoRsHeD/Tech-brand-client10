// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ShowProducts = () => {
    const [product, setProduct] = useState('');

    const products = useLoaderData();
    const { brand } = useParams();

    useEffect(() => {
        const findProduct = products.filter(product => product.brand === brand)
        setProduct(findProduct)
    }, [brand])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>



            <Slider {...settings}>
                {/* slider 1 */}
                <div
                    className='bg-gray-400 rounded-lg my-10 '>
                    <div className='ml-96'>
                        <img className='lg:w-[500px] mx-auto' src="https://i.ibb.co/5cmZP4w/nest-cam.jpg" alt="" />
                    </div>
                    <div className='absolute space-y-4 ml-20 bottom-72'>
                        <h2 className="text-3xl font-bold">New Arrival...!</h2>
                        <h2 className="text-3xl font-bold">Grave it fast.....!</h2>
                        <p className="text-xl">Use our Promo code to get <span className='text-red-600 text-2xl font-bold'>Discount</span></p>
                    </div>
                </div>
                {/* slider 2 */}
                <div
                    className='bg-gray-400 py-10 rounded-lg my-10 '>
                    <div className='ml-96'>
                        <img className='w-[500px] mx-auto' src="https://i.ibb.co/mJL2MWm/sony-gadgets.webp" alt="" />
                    </div>
                    <div className='absolute space-y-4 ml-20 bottom-72'>
                        <h2 className="text-3xl font-bold">Hot item in the market!</h2>
                        <h2 className="text-3xl font-bold">Grave it fast.....!</h2>
                        <p className="text-xl font-semibold">On sale <span className='text-red-600 text-4xl font-bold'>15%</span> for 2 days only</p>
                    </div>
                </div>
                {/* slider 3 */}
                <div
                    className='bg-gray-400 rounded-lg my-10 '>
                    <div className='ml-96'>
                        <img className='w-[500px] mx-auto' src="https://i.ibb.co/wsLgPWW/pixel-watch2.jpg" alt="" />
                    </div>
                    <div className='absolute space-y-4 ml-20 bottom-72'>
                        <h2 className="text-3xl font-bold">Eid Special...!</h2>
                        <p className="text-xl">On Sale<span className='text-red-600 text-2xl font-bold'> 45%</span></p>
                        <h2 className="text-3xl font-semibold">Few items stock</h2>
                        <h2 className="text-3xl font-semibold">Come First,Take first!</h2>
                    </div>
                </div>
            </Slider>

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