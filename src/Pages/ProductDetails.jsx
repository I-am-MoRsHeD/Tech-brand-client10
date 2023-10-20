// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const [details, setDetails] = useState([]);
    const productDetails = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findDetails = productDetails.find(product => product._id === id)
        setDetails(findDetails)
    }, [id, productDetails])

    const { name, photo, desc, price, type, brand } = details;

    const handleAddToCart = () => {
        const item = { name, photo, desc, price, type, brand };
        console.log(item)

        // sending data to the server
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Wow...',
                    text: 'Product added successfully!',
                  })
            }
        })
    }

    return (
        <div>
            <div className='lg:bg-yellow-400 lg:my-14 my-3 rounded-tl-full rounded-br-full flex flex-col items-center lg:h-[100vh]'>
                <h2 className="lg:text-5xl text-4xl font-extrabold font-serif">{brand} Product</h2>
                <div className="lg:my-20 my-4 max-w-4xl mx-auto lg:flex gap-10">
                    <div>
                        <figure><img className='lg:w-[500px] w-96 rounded-lg shadow-xl' src={photo} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body lg:w-1/2 w-full shadow-lg rounded-lg bg-slate-400">
                        <h2 className="card-title text-3xl font-bold">{name}</h2>
                        <p className='text-sm'>{desc}</p>
                        <p className="text-2xl font-bold">{type}</p>
                        <p className='font-semibold'>Price: TK <span className='text-red-600 font-bold'>{price}</span></p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={handleAddToCart}
                                className="btn btn-success hover:btn-error">Add To Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;