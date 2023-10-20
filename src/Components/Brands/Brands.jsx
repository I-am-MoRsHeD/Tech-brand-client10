// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ brand }) => {
    const { brand_name, image } = brand;

    return (
        <div>
            <Link to={`/showProducts/${brand_name}`}>
                <div
                    className="card card-compact lg:w-72 bg-gray-200 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="flex justify-center h-14">
                        <h2 className="card-title">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brands;