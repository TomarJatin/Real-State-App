import React from 'react';

import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='items-center text-center justify-center px-4'>
          <h1 className='text-4xl lg:text-[48px] lg:mb-14 font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Search</span> Properties to rent
          </h1>
        </div>
      <Search />
    </section>
  );
};

export default Banner;
