import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import api from "../../services/api";

const Transaksi = () => {
  const [users, setUsers] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'))
  const userKey = user.user.userId

  const getData = async () => {
    try{
  const response = await api.get(`api/holding/${userKey}`)
  const payload = [...response.data]
  setUsers(payload)
  console.log(users[0].holdingId)
  console.log(users[0])
    }catch{
    }
  }
  
  const handleSubmit = async () =>{
    const response = await api.post(`api/holding/${users[0].holdingId}/jual`,{
    })
    console.log(response)
    
  }
useEffect(()=>{
  getData()
},[])
// console.log(users.holdingId)
  return (
    <>
        <h1 className='text-2xl font-semibold text-center  text-orange-600 mt-3 justify-center'>My Portofolio</h1>
        <p className="text-sm text-orange-600 text-center shadow-xl mb-3 border-b-2">Looking Your Own Product </p>
      <div className='py-6 px-16 m-auto rounded-lg text-white mx-14'>
        <div className='font-sans m-3'>
          <div>
          {users.map(product => (
          <div key={product.holdingId}>
            <div className="flex justify-center my-4">
              <div className="flex flex-col md:flex-row md:w-full h-fit rounded-lg bg-white shadow-lg">
                <img className=" w-auto h-32 md:h-auto object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{product.productName}</h5>
                  <p className="text-gray-700 text-base mb-4 w-4/5">
                    {product.productDesc}
                  </p>
                  <p className="text-gray-600 text-xs">{product.currentInvestment}</p>
                  <button onClick={handleSubmit} type='button' className='text-bold hover:scale-105 text-white bg-orange-900 rounded-md ml-80 mr-14'>Sell Product</button>
                </div>
              </div>
            </div>
            </div>
        ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Transaksi