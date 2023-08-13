import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Job from './Job';
import JobDeatils from './JobDeatils';
import ProductCard from '../ProductCard';

const AllJob = ({jobs}) => {
    const navigate=useNavigate()
    const hnavigate=()=>{
        navigate(`/job/${id}`)

    }
   
    const{id,name,price}=jobs
   
    return (
        <div>
        
           
            
            <ProductCard id={id}></ProductCard>
            
           
          
        </div>
    );
};

export default AllJob;