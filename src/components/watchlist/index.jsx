import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import Aos from "aos";
import 'aos/dist/aos.css';

const Watchlist = () => {
  const [watch, setWatch] = useState([])
  const navigate = useNavigate();
  Aos.init();

  const user =
    JSON.parse(localStorage.getItem(`user`));

  const addWatchlist = async () => {
    try {
      const response = await api.get(`api/watchlist/${user.user.userId}`)
      const payload = [...response.data]
      // console.log(payload[watch].productName)
      setWatch(payload)
    } catch (alert) {
      // console.log(error)
      alert("Error Watchlist Tidak Ada")
    }
  }

  useEffect(() => {
    addWatchlist()

  },[])

  return (
    <>
      <h2 className='text-2xl font-semibold text-center text-orange-600 mt-5 justify-center'> My Watchlist </h2>
      <p className="text-sm text-orange-600 text-center shadow-xl mb-3 border-b-2">Quickly Grab Your Dream Investment Product</p>
      <div className='grid grid-rows-auto grid-cols-3 gap-4 mx-6 my-5'
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500">
        {watch.map(product => (
          <div key={product.productId}>
            <div onClick={() => navigate(`/detailproduct/`+product.productId)}>
              <div className='md:w-72 w-28 md:h-80 h-48 rounded-lg border shadow-xl bg-orange-500 border-slate-500 scale-100 md:hover:scale-105 text-center'>
                <img src={require('./img/sick1.png')} className='md:w-40 w-16 ml-6 md:ml-14' alt='sick'></img>
                <div className=' w-full md:h-32 h-12 '>
                  <p className='md:text-base text-sm text-white' >{product?.productName} </p>
                  <br/>
                  <p className='md:text-lg text-sm text-white' >{product?.productCode} </p>
                  <p className='mt-2 text-sm font-semibold text-white'>Rp.{product?.minimumBuyAmount}</p>
                </div>
              </div>
              </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Watchlist