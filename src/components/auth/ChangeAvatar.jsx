import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser, updateProfile } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userContant';
import Loading from '../component/Loading';

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

const ChangeAvatar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isUpdated, error,loading } = useSelector((state) => state.profile);

    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        email: '',  
        Username: '',  
        avatar: '', 
    });

    const setAvatar = (avatarUrl) => {
        setImage(avatarUrl); // Update the selected image state
        setFormData((prevData) => ({
            ...prevData,
            avatar: avatarUrl, // Update the avatar field in formData
        }));
    };

    const handleSubmit = () => {

        dispatch(updateProfile(formData)); // Dispatch formData with the selected avatar
    };

    useEffect(() => {
        if (image) {
            handleSubmit();
            navigate("/settings");
        }

        if (error) {
            toast.error(error)
            dispatch(clearErrors())
            navigate("/settings");
        }
        if (isUpdated) {
            toast.success("password successfully changes")
            dispatch({ type: UPDATE_PROFILE_RESET })
            navigate("/settings");

        }
    }, [image, navigate, error, isUpdated]);

    return (
        <div className="flex relative h-screen items-center justify-center max-h-full bg-gray-400">
            <div className="py-8 pt-0 bg-[#22275b] h-full w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px]  max-h-full">
            {loading && <Loading />}
                <div className='text-white flex items-center fixed top-0 w-[100vw] sm:w-[400px] lg:w-[400px]  md:w-[400px] justify-between px-3 h-[3rem] z-50 bg-[#2b3270]'>
                    <Link to={"/settings"}>
                        <img className='w-[1.5rem]' src="https://img.icons8.com/?size=100&id=40217&format=png&color=FBFBFB" alt="" />
                    </Link>
                    <h1 className='pr-[8rem] font-semibold text-[1.1rem]'>Change avatar</h1>
                </div>
                <div className='grid grid-cols-3 gap-1 mt-[4.5rem] p-2'>
                    {avatarUrls.map((avatarUrl, index) => (
                        <img
                            key={index}
                            onClick={() => setAvatar(avatarUrl)}
                            className={`${image === avatarUrl ? "border-blue-500" : "border-transparent"} border-2 cursor-pointer rounded-lg`}
                            src={avatarUrl}
                            alt={`avatar-${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChangeAvatar;
