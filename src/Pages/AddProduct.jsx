// eslint-disable-next-line no-unused-vars
import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const desc = form.desc.value;
        const products = { name, brand, photo, desc, type, price, rating };
        console.log(products)

        // sending data to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Nice...',
                        text: 'Product added successfully!'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className='lg:my-10 my-3 py-10 text-white rounded-tl-full rounded-tr-full bg-cyan-600'>
            <h2 className="lg:text-4xl text-2xl mb-10 font-semibold text-center">Add a Product, <br /> Whatever you want</h2>
            <form onSubmit={handleAddProduct}>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="name" placeholder='Name' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Brand Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" placeholder='Brand name' name="brand" id="" />
                    </div>

                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Image</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="photo" placeholder='Photo URL' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Select Type</h2>
                        </label>
                        <select name="type" id="type">
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
                        <input className='w-full p-2 rounded-lg' type="text" name="price" placeholder='$' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label className="rating-label">
                            <h2>Rating</h2>
                        </label>
                        <select className='w-28' name="rating" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <textarea name="desc" id="" placeholder='Short Description' cols="100" rows="3"></textarea>
                </div>
                <div className='w-5/6 mx-auto'>
                    <input type="submit" className='btn w-full' value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;