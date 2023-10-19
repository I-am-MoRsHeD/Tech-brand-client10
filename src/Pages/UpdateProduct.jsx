// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const [product, setProduct] = useState([]);
    const products = useLoaderData();
    const {id} = useParams();

    useEffect(()=>{
        const findProduct = products.find(product => product._id === id);
        setProduct(findProduct)
    },[id,products])

    const {name,brand,photo,desc,price,rating,type} = product;

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const desc = form.desc.value;
        const updateProducts = { name, brand, photo,desc, type, price, rating };
        console.log(updateProducts)

        // updated products
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Nice...',
                        text: 'Product updated successfully!'
                      })
                }
            })


    }
    return (
        <div className='my-10 py-10 text-white rounded-tr-full rounded-bl-full bg-violet-500'>
            <h2 className="text-4xl mb-10 font-semibold text-center">Update Your Product</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="name" defaultValue={name} placeholder='Name' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Brand Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" defaultValue={brand} placeholder='Brand name' name="brand" id="" />
                    </div>

                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Image</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="photo" defaultValue={photo} placeholder='Photo URL' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Select Type</h2>
                        </label>
                        <select name="type" defaultValue={type} id="type">
                            <option value="Mobile">Mobile</option>
                            <option value="Watch">Watch</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Speaker">Speaker</option>
                        </select>
                    </div>

                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Price</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="price" defaultValue={price} placeholder='$' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label className="rating-label">
                            <h2>Rating</h2>
                        </label>
                        <select className='w-28' name="rating" defaultValue={rating} id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <textarea name="desc" defaultValue={desc} id="" placeholder='Short Description' cols="100" rows="3"></textarea>
                </div>
                <div className='w-5/6 mx-auto'>
                    <input type="submit" className='btn w-full' value="Update Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;