import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

const ButtonDetails = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
           <button type='button' className='btn-primary w-full block'>Viewdetails</button> 
        </div>
    );
};

export default ButtonDetails;