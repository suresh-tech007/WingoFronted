import React, { useEffect, useState } from 'react';
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, updatePassword } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UPDATE_PASSWORD_RESET } from '../../redux/constants/userContant';

const ChangePassword = () => {
  const { isUpdated,error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    oldpassword: '',
    confirmpassword: '',
    newpassword: '',

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:   value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.oldpassword || !formData.newpassword || !formData.confirmpassword) {
      toast.error("Please enter valid values");
      return;
    }

    dispatch(updatePassword(formData))
     

  };
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch(clearErrors())
      navigate("/settings");
    }
    if(isUpdated){
      toast.success("password successfully changes")
      dispatch({type:UPDATE_PASSWORD_RESET})
      navigate("/settings");

    }
  },[error,isUpdated])

  return (
    <div className="flex relative h-screen items-center justify-center max-h-full bg-gray-400">
      <div className="py-8 pt-0 bg-[#22275b] h-full w-[400px]   max-h-full">
        <div className='text-white flex items-center fixed top-0 w-[400px] justify-between px-3 h-[3rem] z-50 bg-[#2b3270]'>
          <Link to={"/settings"}>
            <img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" />
          </Link>
          <h1 className='pr-[8rem] font-semibold text-[1.1rem]'>Change password</h1>
        </div>

        <div className='mt-[4rem] p-4 flex   flex-col    '>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2"> Login password</label>
            <div className="flex">
              <span className="bg-[#313672] text-white p-2 rounded-l-md">
                <FontAwesomeIcon className='text-blue-600' icon={faLock} />
              </span>
              <input
                type="password"

                placeholder="Login password"
                name="oldpassword"
                value={formData.oldpassword}
                onChange={handleChange}
                className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-300 text-sm font-bold mb-2"> New login password</label>
            <div className="flex">
              <span className="bg-[#313672] text-white p-2 rounded-l-md">
                <FontAwesomeIcon className='text-blue-600' icon={faLock} />
              </span>
              <input
                type="password"
                name="newpassword"
                placeholder="New Login password"
                value={formData.newpassword}
                onChange={handleChange}
                className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-300 text-sm font-bold mb-2"> Confirm new password</label>
            <div className="flex">
              <span className="bg-[#313672] text-white p-2 rounded-l-md">
                <FontAwesomeIcon className='text-blue-600' icon={faLock} />
              </span>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm new  password"
                value={formData.confirmpassword}
                onChange={handleChange}
                className="bg-[#313672] text-white p-2 rounded-r-md focus:outline-none w-full"
              />
            </div>
          </div>



          <div className="text-end mb-6 hover:text-blue-400 transition-all  duration-500 text-[#808080b3] text-[0.8rem] cursor-pointer w-full">
            Contact customer service
          </div>

          <button onClick={handleSubmit} className="bg-gradient-to-r  mx-5 rounded-3xl   to-blue-500 from-blue-300 text-white py-2 px-5  ">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
