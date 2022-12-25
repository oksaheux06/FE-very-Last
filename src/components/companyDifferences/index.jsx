import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

const CompanyDifferent = () => {
    return (
        <>
            <div className=' justify-center m-1 md:m-8'>
                <div className='text-xl text-center font-bold md:text-3xl rounded-md shadow-md text-orange-600 mb-8'>
                    <h2>Keunggulan Kami</h2>
                </div>
                <div className='flex row list-none justify-center bg-orange-500 rounded-xl'>
                    <div className='p1'
                    data-aos="zoom-out-right">
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl hover:scale-105'>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/loveafter.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Tanpa Biaya Admin</p>
                            <p className='text-center my-4 text-sm md:visible invisible'>Berikan Yang Terbaik Untuk Buah Hati Anda</p>
                        </li>
                    </div>
                    <div className='p1'
                    data-aos="fade-up"
                    data-aos-duration="800">
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl ml-2 hover:scale-105'>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/loveafter.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Proses Cepat</p>
                            <p className='text-center my-4 text-sm md:visible invisible'> Untuk Yang Anda Tinggalkan</p>
                        </li>
                    </div>
                    <div className='p1'
                    data-aos="zoom-out-left">
                        <li className='bg-white box-decoration-clone md:w-44 md:h-48 md:m-5 w-20 h-32 rounded-xl shadow-2xl ml-2 hover:scale-105'>
                            <div className='w-14 h-8 md:ml-16 ml-3 my-8'>
                                <img src={require('./img/loveafter.png')} alt="3" />
                            </div>
                            <p className='text-center font-semibold text-base'>Keamanan Terjamin</p>
                            <p className='text-center my-4 text-sm md:visible invisible'>Jamin Seluruh Biaya Kesehatan Anda</p>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDifferent