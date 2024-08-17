import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, regsiter } from '../../redux/actions/userAction.js';
import { toast } from 'react-toastify';



const RegisterForm = () => {
   
  const dispatch = useDispatch();


  const navigater = useNavigate();
  const { error ,user } = useSelector(
    (state) => state.user
  );


  const [formData, setFormData] = useState({
    country: '+91',
    phoneNum: '',
    password: '',
    confirmPassword: '',
    agreed: false,
    inviteCode: "suresh86899"
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  useEffect(() => {
    if (error) {

      toast(error);
      dispatch(clearErrors());
    }
    if (user) {
      navigater("/Home")

    }

  }, [user, error]);







  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phoneNum === '' || formData.password === '' || formData.confirmPassword === '') {
      toast('Please enter valid Phone Number and Password');
      return;
    }
    dispatch(regsiter(formData))

  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };



  return (
    <div className="flex h-screen relative z-50 items-center justify-center min-h-screen max-h-screen overflow-hidden bg-gray-400">
      <div className="py-8 bg-[#2b3270] h-screen w-[400px]">
        <div className='py-5 px-2'>
          <h2 className="text-white font-sans font-bold text-xl p-3 text-start">Register</h2>
          <p className='text-white px-3 text-[12px] mb-4'>Please register by phone Number</p>
        </div>
        <div className='bg-[#22275b] h-full p-4 w-[400px]'>
          <div className='flex items-center justify-center flex-col h-[10vh]'>
            <PhoneIphoneIcon className='text-[3px] text-blue-600 w-6' />
            <h2 className='text-white'>Register your phone</h2>
            <hr className="border-t-2 border-blue-600 w-full" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Phone number</label>
              <div className="flex">
                <select name="country"
                  value={formData.country} onChange={handleChange} className="bg-[#313672] text-white p-2 rounded-l-md focus:outline-none">
                  <option value={'+91'} className="bg-[#313672] text-black">+91</option>

                </select>
                <input
                  type="text"
                  name="phoneNum"
                  placeholder="Enter phone number"
                  value={formData.phoneNum}
                  onChange={handleChange}
                  className="bg-[#313672] text-white p-2 rounded-r-lg focus:outline-none focus:bg-[#313672] focus:text-white w-full"
                />
                {/* <button type="submit" className='text-[15px] bg-[#313672] border border-gray-600 text-white px-3 p-1 rounded-r-md hover:bg-blue-300 transition duration-30'>OTP</button> */}
              </div>
            </div>


            {/* <form onSubmit={handleVerifyOtp}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Verify OTP</label>
              <div className="flex">
                <span className="bg-[#313672] text-white p-2 rounded-l-md">
                  <MdSendToMobile className='text-blue-600' />
                </span>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="bg-[#313672] text-white p-2 focus:outline-none w-full"
                />
                <button type="submit" className='text-[15px] bg-[#313672] border border-gray-600 text-white px-3 p-1 rounded-r-md hover:bg-blue-300 transition duration-30'>Verify</button>
              </div>
            </div>
          </form> */}


            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Set password</label>
              <div className="flex">
                <span className="bg-[#313672] text-white p-2 rounded-l-md">
                  <FontAwesomeIcon className='text-blue-600' icon={faLock} />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Set password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Confirm password</label>
              <div className="flex">
                <span className="bg-[#313672] text-white p-2 rounded-l-md">
                  <FontAwesomeIcon className='text-blue-600' icon={faLock} />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Invite code</label>
              <input
                type="text"
                name="inviteCode"
                placeholder="Invite code"
                value={formData.inviteCode}
                readOnly
                onChange={handleChange}

                className="bg-[#313672] text-white p-2 rounded-md focus:outline-none w-full"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center text-gray-300 text-sm">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="form-checkbox bg-blue-700 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">
                  I have read and agree
                  <Link to={"/privacyAgr"} className="text-red-500"> {`{Privacy Agreement}`}</Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
              disabled={!formData.agreed}
            >
              Register
            </button>
          </form>

          <button
            type="submit"
            className="w-full bg-transparent border-white border-2 mt-3 text-white py-2 rounded-full hover:bg-blue-300 transition duration-300"
            onClick={handleLogin}
          >
            I have a account <Link className='text-blue-700 font-semibold' to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
      <div id="recaptcha-container"></div> {/* Include recaptcha container here */}
    </div>
  );
};

export default RegisterForm;
