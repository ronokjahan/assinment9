import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDeatils = () => {
    
    
   const data=useLoaderData()
   const {body,id,title}=data
   
   
 

    
    return (
        <div className='flex justify-around'>
            
            <div>
            <h1>Job Details</h1>
                <h2>Job Description: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h2>
                <p>{title}</p>
                <p>Job Responsibility: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
            
            </div>
        <div>
            <h1>Job Details</h1>
            <div>
            <h3>Salary : 100K - 150K (Per Month)</h3>
            <h3>Job Title : Product Designer</h3>
            </div>
            <p>Information</p>
            Phone : 01750-00 00 00
            <p>Email : info@gmail.com</p>
            <p>Address : Dhanmondi 32, Sukrabad
Dhaka, Bangladesh</p>
<button className='bg-indigo-700 text-red-700	block w-60'>Apply Now</button>
        </div>
        
        
         
          
        </div>
    );
};

export default JobDeatils;