// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Brands from '../Brands/Brands';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Branch from '../Branch/Branch';

const Home = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/public/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div>
                <div className='flex justify-center'>
                    <h2 className="text-5xl font-serif font-bold">Our Brands</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-14 py-4 gap-5'>
                    {
                        brands.map(brand => <Brands
                            brand={brand}
                            key={brand.id}
                        ></Brands>)
                    }
                </div>
            </div>
            <Branch></Branch>
            <Footer></Footer>
        </div>
    );
};

export default Home;