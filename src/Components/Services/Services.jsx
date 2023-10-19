// eslint-disable-next-line no-unused-vars
import React from 'react';

const Services = () => {
    return (
        <div className='my-20'>
            <h2 className="text-5xl text-center mb-10 font-bold">About Our Service</h2>
            <div className="collapse collapse-plus w-3/4 mb-2 mx-auto bg-gray-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-extrabold">
                    For how long we give service?
                </div>
                <div className="collapse-content">
                    <p className='font-semibold'> ~We provide 24/hour service to our customer and also provice online services as well</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-3/4 mb-2 mx-auto bg-gray-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-extrabold">
                    What type of facilities are here?
                </div>
                <div className="collapse-content">
                    <p className='font-semibold'>~Many faclities are here..We are giving 1 year replacement Warrenty in any product you bought,15 days money back Guarentee and so on....</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-3/4 mx-auto bg-gray-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-extrabold">
                    Is this site or shop trustable?
                </div>
                <div className="collapse-content">
                    <p className='font-semibold'>~Of course.We have license and Trademark license also..</p>
                </div>
            </div>
        </div>
    );
};

export default Services;