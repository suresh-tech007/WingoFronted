import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, sendEmailOtp, verifyEmailOtp } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import { SEND_OTP_RESET, VERIFY_OTP_RESET } from '../../redux/constants/userContant';

const BindMailbox = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { loading, isVerify, message, error } = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: user.email,
        user_id: '',
        otp: ''
    });

    const Emailhandler = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData, otp: '',
            [name]: value,
        });
    }

    const handleSendCode = () => {

        dispatch(sendEmailOtp(formData))
    };

    const otphandler = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData, otp: '',
            [name]: value,
        });
    }

    const confirmed = () => {

        navigate("/settings")
        

    }

    const handleBind = () => {

        dispatch(verifyEmailOtp(formData))
    };
    useEffect(() => {

        setFormData((prev) => ({
            ...prev,
            user_id: user._id
        }))

        if (error) {

            toast.error(error)
            dispatch(clearErrors())

        }
        if (message) {
            toast.success(message)
            dispatch({ type: SEND_OTP_RESET })

        }
        if (isVerify) {
            toast.success(isVerify)
            dispatch({ type: VERIFY_OTP_RESET })
            setFormData(() => (
                {
                    email: '',
                    user_id: '',
                    otp: ''

                }
            ));
            toast.success("Email add successfully")


        }


    }, [user, error, message, isVerify])

    return (
        <div className="flex relative h-screen items-center justify-center max-h-full bg-gray-400">
            <div className="py-8 pt-0 bg-[#22275b] h-full w-[400px]   max-h-full">
                <div className='text-white flex items-center fixed top-0 w-[400px] justify-between px-3 h-[3rem] z-50 bg-[#2b3270]'>
                    <Link to={"/settings"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                    <h1 className='pr-[8rem] font-semibold text-[1.1rem]'>Bind mailbox</h1>
                </div>

                <div className='flex flex-col p-4' >


                    <div className="mb-4 mt-[4rem]  ">
                        <label className="text-white text-sm flex items-center mb-2 ml-1">
                            <img src="https://img.icons8.com/?size=100&id=jicLxt1sA2qa&format=png&color=1766c7" alt="Mail Icon" className="w-[1.8rem] mr-3" />
                            Mail
                        </label>
                        <div className='flex'>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => Emailhandler(e)}
                                placeholder="please input your email"
                                className="w-full p-3 rounded-l-lg text-sm text-white bg-[#1F1F52]  focus:bg-[#1F1F52]  focus:outline-none"
                                value={formData.email}

                            />
                            <button
                                onClick={handleSendCode}
                                className="p-3 bg-[#367ff6] text-white rounded-r-md text-sm hover:bg-blue-600 focus:outline-none"
                            >
                                Send
                            </button>
                        </div>

                    </div>
                    <div className="mb-8">
                        <label className="text-white text-sm flex items-center mb-2 ml-1">
                            <img src="https://img.icons8.com/?size=100&id=21602&format=png&color=116fe3" alt="Verification Code Icon" className="w-[1.8rem] mr-3" />
                            Verification Code
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Please enter the confirmation code"
                                className="w-full p-3 text-sm text-white bg-[#1F1F52] rounded-l-md focus:outline-none"
                                name="otp"
                                value={formData.otp}
                                onChange={(e) => otphandler(e)}
                            />
                            <button
                                onClick={handleBind}
                                className="p-3 bg-[#367ff6] text-white rounded-r-md text-sm hover:bg-blue-600 focus:outline-none"
                            >
                                verify
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={confirmed}
                        className="w-full p-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-semibold hover:from-blue-500 hover:to-blue-700 focus:outline-none"
                    >
                        Bind
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BindMailbox;
