import { NavbarDua, Footer, FooterIklan } from "@components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import Popup from 'reactjs-popup';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem(`user`));

  const fetchProduct = async (id) => {
    try {
      const url = `api/product/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error.message);
    }
  };
  const addItems = async () => {
    const response = await api.post(`api/watchlist`, {
      userId: user.user.userId,
      productId: product.productId

    })
    console.log(response)
  }
  console.log(product.productId + " ini produk id")
  console.log(user.user.userId + " ini user id")



  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);
  console.log()


  return (
    <>
      <NavbarDua />
      <FooterIklan />
      <div className="py-8 px-16 m-32 rounded-lg text-white mx-14 shadow-md bg-orange-500">
        <div className="border bg-white text-red-500 my-2 w-40 rounded-md hover:scale-105 flex">
          <img className="my-2 ml-2 w-5" src={require('./img/back.png')} alt='back'></img>
          <button className="mx-3"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back To List
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal">
            <div>
              <h1 className="text-3xl uppercase font-serif py-2 ">{product?.productName}.</h1>
              <h1 className="text-lg font-normal">Rp.{product?.minimumBuyAmount}</h1>
              <div className="py-3 h-24 mb-60">
                <p className="text-justify">
                  {product?.productDescription}
                </p>
              </div>
            </div>
            
            <br />
            <div className="flex mt-15">
              <button className="w-96 border bg-green-500 text-white mx-auto px-16 py-3 rounded-lg hover:bg-green-700 hover:scale-105"
                type="button"
                onClick={() => navigate('/payment/' + product.productId)}
              >
                Buy Product
              </button>
              <div>
                <button type="button" className=" font-medium text-sm  hover:cursor-pointer hover:bg-slate-900 ml-5 hover:scale-105 w-28 h-12 border bg-yellow-700 rounded-xl"
                  onClick={addItems}
                >Save
                </button>
              </div>
            </div>
          </div>
          {/* information popup*/}
          <div className="m-3 mt-8  ">
            <img className="mx-auto max-w-sm" src={require("./img/Lo-fi concept-bro.png")} alt='gambar' />
            <div className=" grid grid-cols-3 grid-rows-2 mt-12 ml-48">
              <button className="h-16 border-l-2 border-y-2 border-white bg-orange-800">
                <div className="flex justify-between">
                  <h5 className="ml-16 text-sm text-white">Category</h5>
                  <Popup trigger={<img className="w-5 h-5 m-1" src={require("./img/infodata.png")} alt='infodata'></img>} position="top center">
                    <div className="bg-white rounded-md text-center">
                      <p>Category adalah pembagian beberapa bentuk dari saham</p>
                      <p>dibagi menjadi beberapa jenis pada Indivara Investment</p>
                      <p>dibagi kedalam 2 kategori yaitu syariah dan konvensional.</p>
                    </div>
                  </Popup>
                </div>
                <h5 className="ml-4 text-lg font-bold text-white">{product?.categoryEntity?.categoryName}</h5>
              </button>

              <button className="h-16 border-x-2 border-y-2 border-white bg-orange-800">
                <div className="flex justify-between">
                  <h5 className="ml-16 text-sm text-white">Code</h5>
                  <Popup trigger={<img className="w-5 h-5 m-1" src={require("./img/infodata.png")} alt='infodata'></img>} position="top center">
                    <div className="bg-white rounded-md text-center">
                      <p>Kode saham umumnya mirip dengan nama perusahaannya</p>
                      <p>ada juga kode saham yang tidak mirip dengan nama perusahaan</p>
                      <p>namun dengan nama produk utamanya. </p>
                    </div>
                  </Popup>
                </div>
                <h5 className=" mr-1 text-lg font-bold text-white">{product?.productCode}</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default DetailProduct