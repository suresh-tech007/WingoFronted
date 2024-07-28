import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCheck } from 'react-icons/fa';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { faLock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const LoginForm = () => {
  const [usemobile, setUsemobile] = useState(false)
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/register');
  };

  const changecheckde = ()=>{
    setChecked(!checked)
  }


  return (
    <div className="flex h-screen items-center justify-center min-h-screen max-h-screen  overflow-hidden bg-gray-400">
      <div className=" py-8  bg-[#2b3270]   h-screen   md:w-[400px] w-screen    ">


        <div className='py-5 px-2'>
          <h2 className="  text-white font-sans  font-bold text-xl  p-3 text-start">Log in </h2>
          <p className=' text-white  px-3 text-[10px]   '>Please log in with your phone number or email</p>
          <p className=' text-white  px-3 text-[10px] mb-4 '>If you forget your password, please contact customer service</p>
        </div>
        <div className=' bg-[#22275b] h-full   md:w-[400px] w-screen  '>

          <div className='flex flex-row items-center justify-center    '>
            <div className='flex  items-center justify-center cursor-pointer w-[50%] flex-col h-[10vh]  gap-2  ' onClick={() => setUsemobile(true)} >
              <PhoneIphoneIcon className={`${usemobile ? "text-blue-600" : "text-gray-500"} text-[3px]    w-6 transition-all ease-in-out    `} />
              <h2 className={`${usemobile ? "text-white" : " text-gray-400"} text-white font-bold    transition-all duration-300   `}>Log in with phone </h2>
              <hr className={`border-t-2  ${usemobile ? "border-blue-600" : "border-gray-500"}  w-full transition-all duration-300`} />


            </div>
            <div className='flex  items-center justify-center cursor-pointer w-[50%] flex-col h-[10vh] gap-2  ' onClick={() => setUsemobile(false)}>
              <EmailIcon className={`${!usemobile ? "text-blue-600" : "text-gray-500"} text-[3px]  transition-all duration-300   w-6`} />
              <h2 className={`${!usemobile ? "text-white" : " text-gray-400"} text-white font-bold   transition-all duration-300    `}>Email Login </h2>
              <hr className={`border-t-2  ${!usemobile ? "border-blue-600" : "border-gray-500"}  transition-all duration-300 w-full`} />


            </div>
          </div>

          <div className='flex  items-center  justify-evenly flex-row   '>
            <div className={`${usemobile ? "block" : "hidden"} w-[400px] px-4`}>
              <form onSubmit={handleSubmit} className='p-4   ' >
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Phone number</label>
                  <div className="flex">
                    <span className="bg-[#313672] text-white p-2 rounded-l-md">
                      <PhoneAndroidIcon className='text-blue-600 ' icon={faLock} />
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2"> Enter password</label>
                  <div className="flex">
                    <span className="bg-[#313672] text-white p-2 rounded-l-md">
                      <FontAwesomeIcon className='text-blue-600' icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex items-center pb-3 px-1 relative">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-full focus:outline-none"
                    checked={checked}
                    onChange={changecheckde}
                  />
                  <FaCheck    className={`${checked ? 'opacity-100' : 'opacity-0'} text-white block absolute size-3 top-1 left-1.5 transition-all duration-300`} />
                  <label htmlFor="remember-me"     className="ml-2 text-sm text-gray-600 cursor-pointer">
                    Remember Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
                <button
                  type="submit"
                  className="w-full mt-4   bg-transparent border-white border-2   text-white py-2 rounded-full hover:bg-blue-300 transition duration-300"
                  onClick={handleLogin}
                >
                  I have no  account <Link className='text-blue-700 font-semibold' to={"/register"}>Register</Link>
                </button>
                <Link to={"/forgotpassword"} className='text-blue-700 font-semibold hover:text-white transition-all duration-300  pt-9 px-4  text-[12px] h-[10vh]  ' >forgot Password ?</Link>
              </form>
            </div>
            <div className={`${!usemobile ? "block" : "hidden"}  w-[400px] px-4`}>
              <form onSubmit={handleSubmit} className='p-4' >
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                  <div className="flex">
                    <span className="bg-[#313672] text-white p-2 rounded-l-md">
                      <MailOutlineIcon className='text-blue-600 ' icon={faLock} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2"> Enter password</label>
                  <div className="flex">
                    <span className="bg-[#313672] text-white p-2 rounded-l-md">
                      <FontAwesomeIcon className='text-blue-600' icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center pb-3 px-1 relative">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-full focus:outline-none"
                    checked={checked}
                    onChange={changecheckde}
                  />
                  <FaCheck className={`${checked ? 'opacity-100' : 'opacity-0'} text-white block absolute size-3 top-1 left-1.5 transition-all duration-300`} />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600 cursor-pointer">
                    Remember Password
                  </label>
                </div>


                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
                <button
                  type="submit"
                  className="w-full mt-4   bg-transparent border-white border-2   text-white py-2 rounded-full hover:bg-blue-300 transition duration-300"
                  onClick={handleLogin}
                >
                  I have no  account ? <Link className='text-blue-700 font-semibold' to={"/register"}>Register</Link>
                </button>
                <Link to={"/forgotpassword"} className='text-blue-700 font-semibold hover:text-white transition-all duration-300  pt-9 px-4  text-[12px] h-[10vh]  ' >forgot Password ?</Link>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
