import React, { Component } from "react";
import { NavbarBeforeLogin, Footer } from "@components";
import axios from "axios";
import { toast } from "react-toastify";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = { fullName: '', email: '', password: '', phoneNumber: ''}
  }
  handleChange = (ex) => {
    this.setState({ [ex.target.name]: ex.target.value })
  }
  addRegist = e => {
    e.preventDefault()
    if(!this.state.email){
      toast.error("Email Harus Di Masukkan")
      return;
    }
    if(this.state.password.length <=5){
      toast.error("Password Harus Berisi 8 character")
      return;
    }
    
    axios.post("http://localhost:8080/auth/register", this.state)
      .then(response => {
        localStorage.setItem("fullName", this.state.fullName)
        localStorage.setItem("phoneNumber", this.state.phoneNumber)
        localStorage.setItem("password", this.state.password)
        localStorage.setItem("email", this.state.email)
        console.log(response)
        window.location.href = ('/login')
      })
      
      .catch(error => {
        toast.error(error.response.data.data)
        // console.log(error.response)
      })
  }
  render() {
    const {
      fullName,
      phoneNumber,
      password,
      email
    } = this.state
 
  return(
    <>
    <NavbarBeforeLogin/>
  <div className="container mx-auto px-4 h-full shadow-2xl w-fit my-12">
    <div className="flex content-center items-center justify-center h-full">

          <div className="text-center">
            <h6 className=" text-lg font-bold">AYO GABUNG BERSAMA</h6>
            <h6 className=" text-lg font-bold text-orange-600">INDIVARA INVESTMENT</h6>
          </div>

      <div className="w-full lg:w-6/12 px-4">
        <div className="rounded-t mb-0 px-6 py-6">

         
          <div className='mx-32 my-5 justify-center'>
            {/* fullName */}
            <label className="form-label inline-block mb-2 text-gray-700">Full Name</label>
            <input type="fullName" name='fullName' value={fullName} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : Portgas D Ace' onChange={this.handleChange} />

            {/* phoneNumber */}
            <label className="form-label inline-block mb-2 text-gray-700">Phone Number</label>
            <input type="phoneNumber" name='phoneNumber' value={phoneNumber} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : 62812848473 ' onChange={this.handleChange} />

            {/* email */}
            <label className="form-label inline-block mb-2 text-gray-700">email</label>
            <input type="email" name='email' value={email} className='block w-96 h-7 rounded-sm border-b-2 invalid:text-red-700 invalid:focus:ring-red-700 invalid:focus:border-red-700' placeholder='Contoh : portgasace@invest.com ' onChange={this.handleChange} />

            {/* password */}
            <label className="form-label inline-block mb-2 text-gray-700">password</label>
            <input type="password" name='password' value={password} className='block w-96 h-7 rounded-sm border-b-2' placeholder='Contoh : ********* ' onChange={this.handleChange} />
            </div>
        </div>
        <div className="text-center mt-6">
          <button
            className="bg-orange-400 text-white hover:shadow-lg hover:bg-orange-800 w-60 transition-all duration-150 rounded-md ml-56 mb-5 h-8"
            type="button"
            onClick={this.addRegist}
          >Create Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}
}
