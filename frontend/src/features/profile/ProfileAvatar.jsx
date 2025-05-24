import React, { useState } from 'react'
import useReadFileInput from '../../hooks/useReadFileInput'
import { MdEdit } from "react-icons/md";
import useGetAuthUser from '../auth/useGetAuthUser';
import useFollowUser from '../../hooks/useFollowUser';
import Loading from '../../ui/Loading'
import useEditProfile from './useEditProfile'
import EditProfileForm from './EditProfileForm';
import Modal from '../../ui/Modal'

function ProfileAvatar({ user }) {
    const [coverImg, setCoverImg] = useState(null)
    const [profileImg, setProfileImg] = useState(null)
    const { inputRef: coverImgRef, onImageChange: changeCoverImg } = useReadFileInput(setCoverImg)
    const { inputRef: profileImgRef, onImageChange: changeProfileImg } = useReadFileInput(setProfileImg)
    const { authUser } = useGetAuthUser()
    const { followUser, isFollowing } = useFollowUser()
    const { updateProfile, isUpdating } = useEditProfile()
    const [ isOpen, setIsOpen ] = useState(false)

    const isMyProfile = authUser._id == user._id;
    const isFollow = authUser.following.includes(user._id);

    const editProfileHandler = async () => {
        await updateProfile({ coverImg, profileImg })
        setCoverImg(null)
        setProfileImg(null)
    }

    return (
        <div className='w-full'>
            <div className='w-full relative group'>
                <img
                    src={coverImg || user?.coverImg || '/cover.png'}
                    alt="profilebg"
                    className="w-full object-cover h-[12rem]"
                />
                <input type="file" onChange={changeCoverImg} ref={coverImgRef} className='hidden' />
                {
                    isMyProfile &&
                    <button onClick={() => coverImgRef.current.click()} className='text-secondary-900 w-7 h-7 rounded-full hidden items-center justify-center absolute right-2 top-2 text-lg bg-secondary-200 group-hover:flex'>
                        <MdEdit />
                    </button>
                }
                <div className="absolute left-4 -bottom-10 h-28 w-28 rounded-full">
                    <img
                        className='h-full w-full rounded-full object-cover'
                        src={profileImg || user?.profileImg || '/avatar-placeholder.png'}
                        alt="profileImage"
                    />
                    <input type="file" onChange={changeProfileImg} ref={profileImgRef} className='hidden' />
                    {
                        isMyProfile &&
                        <button onClick={() => profileImgRef.current.click()} className='text-secondary-900 w-5 h-5 rounded-full items-center justify-center absolute right-3 top-3 text-sm bg-primary-700 hidden group-hover:flex'>
                            <MdEdit />
                        </button>
                    }
                </div>
            </div>
            <div className='flex items-center gap-x-2 justify-end py-3 px-4'>
                {
                    isMyProfile ? (
                        <>
                            <button onClick={() => setIsOpen(true)} className='btn btn--secondary_outline py-2'>Edit Profile</button>
                            <Modal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            >
                                <EditProfileForm />
                            </Modal>
                        </>
                    ) : (
                        <button onClick={() => followUser(user._id)} className='btn btn--secondary_outline py-2 cursor-pointer'>
                            {
                                isFollowing ? (
                                    <Loading size='sm' />
                                ) : isFollow ? 'UnFollow' : 'Follow'
                            }
                        </button>
                    )
                }
                {
                    (coverImg || profileImg) &&
                    <button onClick={editProfileHandler} className='btn btn--primary_fill py-2 text-sm'>
                        {
                            isUpdating ? (
                                <Loading size='sm' />
                            ) : 'Update'
                        }
                    </button>
                }
            </div>
        </div>
    )
}

export default ProfileAvatar
