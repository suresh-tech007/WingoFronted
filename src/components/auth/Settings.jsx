import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, loaduser, updateProfile } from "../../redux/actions/userAction";
import { Link, Navigate } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../redux/constants/userContant";
import Loading from "../component/Loading";

const Settings = () => {
    const dispatch = useDispatch();
    const { user,loading:loadinguser  } = useSelector((state) => state.user);
    const { isUpdated, loading, error } = useSelector((state) => state.profile);
    
    const [changenamediv, setChangenamediv] = useState(false);
    
    const [nickname, setNickname] = useState(user.Username);
    const [formData, setFormData] = useState({
        email: user.email || '',
        Username: user.Username || '',
        avatar: user.avatar || '',
    });

    const handleConfirm = () => {
        
      

        // Update the formData with the current nickname
        setFormData((prevData) => ({
            ...prevData,
            Username: nickname,
        }));

        dispatch(updateProfile({ ...formData, Username: nickname }));
        
    };

    const copyToClipboard = (uid) => {
        navigator.clipboard.writeText(uid).then(() => {
            toast.success('Text copied to clipboard');
        }).catch(err => {
            toast.error('Failed to copy: ');
        });
    };
    useEffect(() => {
    
        if (  loading) {      
            dispatch(loaduser());  
        }
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            toast.success("Password update successfully");
     
      
            dispatch({
              type: UPDATE_PASSWORD_RESET,
            });
          }
       

         
         
    }, [loading,error,loading, dispatch]);
    


    
  

    

    return (
        <div className="flex relative h-screen items-center justify-center max-h-full bg-gray-400">
            <div className="py-8 pt-0 bg-[#22275b] h-full w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  max-h-full">
            {loading || loadinguser && <Loading />}

                <div className={` ${changenamediv?"  opacity-100 scale-100 ":"  opacity-0 scale-0"} transition-all duration-500 absolute z-50 w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]`}>
                    <div className="flex items-center flex-col justify-center min-h-screen bg-[#0000001f] bg-opacity-50">
                        <div className="bg-[#374992] rounded-lg p-6 w-80 h-[15rem] shadow-lg relative">
                            <h2 className="text-white text-center font-semibold text-lg mb-4 border-b border-blue-800 pb-2">
                                Change Nickname
                            </h2>
                            <div className="flex items-center bg-[#2b3270] rounded-md p-2 mb-6">
                                <img
                                    src="https://img.icons8.com/?size=100&id=12534&format=png"
                                    alt="Nickname Icon"
                                    className="w-6 h-6 mr-2"
                                />
                                <input
                                    type="text"
                                    className="bg-transparent text-white outline-none w-full"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleConfirm}
                                    className="bg-blue-500  text-white w-full py-2 rounded-3xl font-semibold hover:bg-blue-600 transition duration-300"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                        <button
                            className="mt-4 p-1 px-[0.7rem] border-gray-500 border rounded-full bg-transparent text-gray-500 text-xl font-semibold"
                            onClick={()=>setChangenamediv(false)}
                        >
                            &#x2715;
                        </button>
                    </div>
                </div>
                <div className='text-white flex items-center fixed top-0 w-[400px] justify-between px-3 h-[3rem] z-50 bg-[#2b3270]'>
                    <Link to={"/wallet"}><img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" /></Link>
                    <h1 className='pr-[8rem] font-semibold text-[1.1rem]'>Settings Center</h1>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-start w-full pl-5 pt-9 pb-0 z-10"></div>
                    <div className="bg-[#374992] h-[30vh] text-white font-serif flex rounded-3xl p-5 m-5 mx-6 w-[95%] z-10 flex-col justify-evenly">
                        <div className="flex items-center justify-between">
                            <div className="rounded-full h-[8vh] mr-5 flex z-10 items-center justify-center w-[8vh] overflow-hidden">
                                <img className="w-[8rem] h-[5rem]" src={user.avatar.url ? user.avatar.url : user.avatar ? user.avatar : image} alt="profile_pic" />
                            </div>
                            <Link to="changeavatar"   className="flex gap-3 cursor-pointer">
                                <p className="text-[#e4e4e4]">Change avatar</p>
                                <img className="w-[1.4rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7" alt="" />
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>{user && user.Username}</p>
                            <div onClick={()=>setChangenamediv(true)} className="flex gap-3 cursor-pointer">
                                <p className="text-[#f2f1f1]">Change Name</p>
                                <img className="w-[1.4rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7" alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>UID</p>
                            <div className="flex gap-3 cursor-pointer">
                                <span className="text-[#dbd9d9]"> {user && user.UID}</span>
                                <img onClick={copyToClipboard} className="w-[1.5rem]" src="https://img.icons8.com/?size=100&id=86216&format=png&color=1B1F2499" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start w-[400px] pl-5">
                        <h1 className="font-poppins text-white font-semibold">Security information</h1>
                    </div>
                    <div className="bg-[#2b3270] h-[8vh] text-white font-sans flex rounded-xl px-5 m-5 mx-6 w-[95%] z-10 items-center justify-between">
                        <div className="flex items-center">
                            <img className="w-[2rem]" src="" alt="" />
                            <p>Login password</p>
                        </div>
                        <Link to={"changepassword"} className="flex cursor-pointer items-center gap-1">
                            <span className="text-[#a1a1a1a0]">Edit</span>
                            <img className="w-[1.3rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7" alt="" />
                        </Link>
                    </div>
                    <div className="bg-[#2b3270] h-[8vh] text-white font-sans flex rounded-xl px-5 m-5 mx-6 w-[95%] z-10 items-center justify-between">
                        <div className="flex items-center">
                            <img className="w-[2rem]" src="" alt="" />
                            <p>Blind mailbox</p>
                        </div>
                        <Link to={"BindEmail"} className="flex cursor-pointer items-center gap-1">
                            <span className="text-[#a1a1a1a3] text-[0.8rem]">to blind</span>
                            <img className="w-[1.3rem]" src="https://img.icons8.com/?size=100&id=60671&format=png&color=7C7E7FF7" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 z-[5] bg-[#2b3270] h-[25vh] w-[400px] rounded-br-[100px] rounded-bl-[100px]"></div>
        </div>
    );
};

export default Settings;
