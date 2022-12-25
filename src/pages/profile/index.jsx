import { NavbarDua, Footer, IklanProfile, Watchlist, Transaksi } from "@components";
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import api from "../../services/api";
import Popup from 'reactjs-popup';

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  const [wallet, setWallet] = useState([])
  Aos.init();

  const user =
    JSON.parse(localStorage.getItem(`user`));
  console.log(user)
  const getData = async () => {
    try {
      const response = await api.get(`api/user/${user.user.userId}`)
      const payload = { ...response.data }
      setProfileData(payload)
    } catch (alert) {

    }
  }
  const postWallet = async () =>{
    const response = await api.post(`api/topup/${user.user.userId}`,{
      "wallet":wallet
    })

  }
 
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <NavbarDua />
      {/* <DataProfile /> */}

      <div className="flex">

        <div className="mx-6 mt-7 rounded-lg md:h-96 w-1/2">
          <h2 className='text-center font-medium text-xl mb-2 text-orange-600'>NEWS TERBARU</h2>
          <p className="text-sm text-orange-600 text-center shadow-xl border-b-2">The Latest News Related To tocks</p>
          <div className="flex">
            <div className=" border-orange-600 divide-solid border-4 grid place-items-center bg-white mx-6 mt-3 h-80 rounded-lg w-full">
            <Popup trigger={<button className="w-16 h-7 bg-orange-600 rounded-xl mt-3" >Topup</button>} position="botom center">
                    <div className="bg-white rounded-md text-center block border">
                      <p>Topup Nominal Anda</p>
                      <p>{"332"+user.user.phoneNumber+"14"}</p>
                      <input name="wallet" value={wallet} id="wallet" onChange={(e)=> setWallet (e.target.value)}/>                      <br/>
                      <button className="bg-orange-600 w-12 mt-3" onClick={postWallet}>Kirim</button>
                    </div>
                  </Popup>
              <img
                className=" w-36 h-36 rounded-full border mt-3 "
                src={require("./img/account.png")}
                alt="profileImg"
              />
              <div className="flex">
                <div className="flex place-items-center">
                  <img
                    src={require("./img/wallet-fill.png")}
                    alt="logo"
                    className="w-7 h-7"
                  ></img>
                  <label> Rp. </label>
                  <p className=" text-black text-xl">{profileData.wallet}</p>
                </div>
              </div>
              <div className="flex place-items-center">
                {/* Full Name */}
                <img
                  src={require("./img/account-circle-fill.png")}
                  alt="logo"
                  className="w-7 h-7"
                ></img>
                <p className=" text-black text-xl">{user?.user?.fullName}</p>
              </div>
              <div className="flex place-items-center">
                {/* Phone Number */}
                <img
                  src={require("./img/phone-fill.png")}
                  alt="logo"
                  className="w-7 h-7"
                ></img>
                <li className="list-none">
                  <p className=" text-black text-md">{user?.user?.phoneNumber} </p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <IklanProfile />
      </div>
      <Watchlist />
      <Transaksi />
      <Footer />
    </>
  );
};

export default Profile;