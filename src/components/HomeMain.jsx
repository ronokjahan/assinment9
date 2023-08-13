import React from 'react';
import accounts from '../assets/Logo/accounts 1.png';
import Shop from './Shop';
import ButtonDetails from './ButtonDetails';

const HomeMain = () => {
    return (
        <div>
         <div className='text-center'>
         <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
            Job Category List
          </h1>
       
         </div>
         <section className='flex justify-around mt-6'>
          <div className='rounded border-slate-300	'>
          <img src={accounts} alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
          <div>
          <img src={accounts} alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
          <div>
          <img src={accounts} alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
          <div>
          <img src={accounts} alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>


         </section>
         {/* jobsection------------------- */}
         <section>
          <div className='mt-6 text-center'>
            <h2 className='text-blue-600 text-2xl font-bold md:font-bold'>Featured Jobs</h2>
            <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>


         </section>
         {/* api sectionn--------------------------- */}
         <section>
       
          <Shop></Shop>

         </section>
 
        </div>
    );
};

export default HomeMain;