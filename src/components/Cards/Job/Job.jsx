import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllJob from './AllJob';
import ProductCard from '../ProductCard';

    
        const Job = ({hnavigate}) => {
    const job=useLoaderData()
   
    
    

    
    
   
    return (
        <div>
            <h1>job {job.length}</h1>
            {
                job.map(jobs=><AllJob
                jobs={jobs}
                ke={jobs.id}
                
                ></AllJob>
                
                )
            }
           
        </div>
    );
};

export default Job;