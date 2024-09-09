import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, regsiter } from '../../redux/actions/userAction.js';
import { toast } from 'react-toastify';
import Loading from '../component/Loading.jsx';
const avatarUrls = [
  "/avatar/1-a6662edb.png",
  "/avatar/2-58c8a9bc.png",
  "/avatar/3-abfcc056.png",
  "/avatar/4-12a0d0c5.png",
  "/avatar/5-ab77b716.png",
  "/avatar/6-7c7f5203.png",
  "/avatar/7-00479cfa.png",
  "/avatar/8-ea087ede.png",
  "/avatar/9-6d772f2c.png",
  "/avatar/10-29a6603e.png",
  "/avatar/12-ae12c679.png",
  "/avatar/14-a397ff6b.png",
  "/avatar/15-80f41fc6.png",
  "/avatar/17-bedde42f.png",
  "/avatar/20-a58f23bf.png",
];

const RegisterForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const invitationCode = searchParams.get('invitationCode');
  const randomAvatar = avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    country: '+91',
    phoneNum: '',
    password: '',
    confirmPassword: '',
    agreed: false,
    invitationCode: invitationCode || '',
    avatar:randomAvatar || ""
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
      navigate("/Home");
    }
  }, [user, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phoneNum === '' || formData.password === '' || formData.confirmPassword === '') {
      toast('Please enter valid Phone Number and Password');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast('Passwords do not match');
      return;
    }

    dispatch(regsiter(formData));
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
     <>
        {loading && <Loading />}
    <div className="flex h-screen relative z-50 items-center justify-center min-h-screen max-h-screen overflow-hidden bg-gray-400">
      <div className="py-8 bg-[#2b3270] h-screen w-[100vw] sm:w-[400px] lg:w-[400px] md:w-[400px]">
        <div className='py-5 px-2'>
          <h2 className="text-white font-sans font-bold text-xl p-3 text-start">Register</h2>
          <p className='text-white px-3 text-[12px] mb-4'>Please register by phone Number</p>
        </div>
        <div className='bg-[#22275b] h-full p-4 w-[100vw] sm:w-[400px] lg:w-[400px] md:w-[400px]'>
          <div className='flex items-center justify-center flex-col h-[10vh]'>
            <PhoneIphoneIcon className='text-[3px] text-blue-600 w-6' />
            <h2 className='text-white'>Register your phone</h2>
            <hr className="border-t-2 border-blue-600 w-full" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">Phone number</label>
              <div className="flex">
                <select name="country" value={formData.country} onChange={handleChange} className="bg-[#313672] text-white p-2 rounded-l-md focus:outline-none">
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
              </div>
            </div>

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
                name="invitationCode"
                placeholder="Invite code"
                value={formData.invitationCode}
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
            type="button"
            className="w-full bg-transparent border-white border-2 mt-2 py-2 text-white rounded-full hover:bg-white hover:text-[#2b3270] transition duration-300"
            onClick={navigateToLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div></>
  );
};

export default RegisterForm;
