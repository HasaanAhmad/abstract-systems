import React from 'react';
import Service from './Service';
import code from '../images/Code.png';

const ServiceLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="rounded-lg shadow-lg border-white border-[1px] px-4">
        <h1 className="text-white text-3xl font-bold text-center px-5 py-3 font-barlow-condensed ">Services</h1>
      </div>

      <div className='p-20'>

      <Service title="Web Development" desc="Web Development is bla bla bla" icon={code}/>
      </div>
    </div>
  );
};

export default ServiceLayout;
