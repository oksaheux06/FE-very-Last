import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

const Testimoni = () => {
  return (
    <>
      <div className=' text-center text-4xl font-bold text-orange-600 mt-2 shadow-md rounded-md'>
        <h1> What Our Early Users Have To Say About Indivara Investment</h1>
        </div>
    
      <div className='m-6 md:h-96 rounded-md'>
        <div className='justify-center md:grid grid-rows-1 grid-flow-col gap-4 py-8'>
              <div className='bg-white shadow-2xl text-orange-700 md:m-2 rounded-lg flex md:block mb-2 md:mb-0 hover:bg-orange-500 hover:text-white'
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1200">
                <img src={require('./img/Dizzy face-cuate.png')} alt="3" className='w-28 h-28  ml-2 md:mx-12 mt-7 md:mt-5 ' />
                <h4 className='text-xl text-center font-semibold md:visible invisible'>Allisha</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-white shadow-2xl text-orange-700  md:m-2 rounded-lg flex md:block mb-2 md:mb-0 hover:bg-orange-500 hover:text-white'
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1400">
                <img src={require('./img/Dizzy face-cuate.png')} alt="3" className='w-28 h-28  ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold md:visible invisible'>Apri</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-white shadow-2xl text-orange-700  md:m-2 rounded-lg flex md:block mb-2 md:mb-0 hover:bg-orange-500 hover:text-white'
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1600">
                <img src={require('./img/Dizzy face-cuate.png')} alt="3" className='w-28 h-28  ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold md:visible invisible'>Basir</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-white shadow-2xl text-orange-700  md:m-2 rounded-lg flex md:block mb-2 md:mb-0 hover:bg-orange-500 hover:text-white'
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1800">
                <img src={require('./img/Dizzy face-cuate.png')} alt="3" className='w-28 h-28  ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold md:visible invisible'>Dadan</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-white shadow-2xl text-orange-700 md:m-2 rounded-lg flex md:block mb-2 md:mb-0 hover:bg-orange-500 hover:text-white'
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="2000">
                <img src={require('./img/Dizzy face-cuate.png')} alt="3" className='w-28 h-28 ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold md:visible invisible'>Oksa</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
        </div>
      </div>
    </>
  )
}

export default Testimoni