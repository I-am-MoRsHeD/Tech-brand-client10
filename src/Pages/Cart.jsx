// eslint-disable-next-line no-unused-vars
import React from 'react';
import Swal from 'sweetalert2';

const Cart = ({ cart, carts, setCarts }) => {
    const { _id, photo, name, price, type } = cart;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(c => c._id !== _id);
                            setCarts(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content lg:my-10 my-3 bg-gray-200 lg:py-10 py-3 gap-5 flex-col lg:w-3/4  lg:flex-row">
                    <img src={photo} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="py-6">Price: TK <span className='font-bold text-3xl'>{price}</span></p>
                        <p>Item:{type}</p>
                        <div className='flex justify-end'>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;