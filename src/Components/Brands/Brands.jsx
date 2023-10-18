// eslint-disable-next-line no-unused-vars
import React from 'react';

const Brands = ({ brand }) => {
    const { brand_name, image } = brand;
    return (
        <div>
            <div 
            className="card card-compact w-72 bg-gray-300 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="flex justify-center h-14">
                    <h2 className="card-title">{brand_name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Brands;