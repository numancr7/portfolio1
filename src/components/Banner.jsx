import React from 'react';
import Baner from '/baner.png';

const Banner = () => {
  return (
    <div className="shadow-2xl py-2 h-auto">
      <img 
        className="w-full max-h-screen object-cover md:max-h-100" 
        src={Baner} 
        alt="Banner" 
      />
    </div>
  );
};

export default Banner;
