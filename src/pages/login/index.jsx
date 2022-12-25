import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const token = localStorage.getItem("user")
  // console.log(email)
  // console.log(password)

  const addLogin = async () => {
    try {
      const response = await api.post(`auth/login`, {
        email: email,
        password: password
      })
      
      const payload = response?.data?.data
      localStorage.setItem("user", JSON.stringify(payload))
      console.log(response.data.status)
      if (response.data.status === 200) {
        navigate("/listproduct", {
          replace: true
        })
      }
      else {
        console.log("error")
      }

    } catch (error) {
      toast.error(error.response.data.data)
      // console.log(error.response.data.data)
    }
  }
  useEffect(() => {
    if (token) {
      navigate("/listproduct", {
        replace: true
      })
    }

  }, [token, navigate]);

  return (
    <>
      <div className="mx-auto mt-14 lg:w-4/12 px-4 relative flex flex-col w-full mb-6 shadow-xl shadow-gray-500 rounded-lg bg-slate-100 ">
        <div className="rounded-t mb-0 px-6 py-6 flex">
          <div className="border bg-white text-red-500  ml-3 my-2 w-24 rounded-md hover:scale-105 flex">
            <img className="ml-2 w-5" src={require('./img/back.png')} alt='back'></img>
            <button className="mx-3"
              type="button"
              onClick={() => navigate('/')}
            >
              Back
            </button>
          </div>
          <div className="text-center mt-5 ml-11">
            <h3 className="text-blueGray-500 text-sm font-bold">
              Log In
            </h3>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={(e) => { e.preventDefault(); addLogin() }}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input type="email" name="email" value={email} placeholder="email" id="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:ring w-full ease-linear transition-all duration-150 focus:outline-none invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                type="password" name="password" value={password} id="password" maxLength={15}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-orange-700"
                type="submit"

              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-orange-700"
                type="button"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Login
