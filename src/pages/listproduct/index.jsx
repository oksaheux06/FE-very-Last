import React from 'react'
import { NavbarDua, Footer, TabList, } from '@components'
import { Carousel } from 'antd'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ListProduct = () => {
  const user =
  JSON.parse(localStorage.getItem(`user`));
  console.log(user)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  })
  return (
    <>
      <NavbarDua />
      <Carousel autoplay className='m-8'>
        <div>
          <img src={require("./img/iklan1.png")} alt='iklan' className='rounded-xl'></img>
        </div>
        <div>
          <img src={require("./img/iklan2.png")} alt='iklan' className='rounded-xl'></img>
        </div>
        <div>
          <img src={require("./img/iklan3.png")} alt='iklan' className='rounded-xl'></img>
        </div>
      </Carousel>
      <div className='text-orange-600 text-xl text-center font-bold md:text-3xl shadow-md'>
        <h2>Pilih Produk Sesuai Kebutuhan Kamu</h2>
      </div>
      <TabList />
      <Footer />

    </>
  )
}

export default ListProduct