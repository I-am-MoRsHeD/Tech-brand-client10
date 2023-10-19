// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
// import Swal from 'sweetalert2';

const MyCart = () => {
    const items = useLoaderData();
    const [carts, setCarts] = useState(items);

    return (
        <div>
            <div className='my-10'>
                <h2 className="text-5xl text-center font-bold">Your Items</h2>
                {
                    carts?.map(item => <Cart
                    key={item._id}
                    carts={carts}
                    setCarts={setCarts}
                    cart={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;