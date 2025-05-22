import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import XSvg from '../features/svg/X';
import { TbLogout2 } from "react-icons/tb";
import ProfileBtnSkeleton from '../features/profile/skeleton/ProfileBtnSkeleton'
import useGetAuthUser from '../features/auth/useGetAuthUser';
import useLogoutUser from '../features/auth/useLogoutUser'
import Loading from '../ui/Loading'

function Sidbar() {
    const { authUser, isLoading } = useGetAuthUser()
    const navigate = useNavigate()
    const { logoutUser, isLoading: isPending } = useLogoutUser()

    return (
        <nav className='pr-4 border-r border-r-secondary-400 h-screen flex flex-col list-none pb-10 justify-between sticky top-5'>
            <ul>
                <NavLink to='/'>
                    <li>
                        <XSvg className='fill-white w-10 mx-auto md:mx-3 block' />
                    </li>
                </NavLink>
                <NavLink className='SidbarNav' to='/'>
                    <li className='sm:flex sm:items-center sm:gap-x-3'>
                        <TiHome />
                        <p className='text-lg text-secondary-900 hidden md:flex'>Home</p>
                    </li>
                </NavLink>
                <NavLink className='SidbarNav' to='/notification'>
                    <li className='sm:flex sm:items-center sm:gap-x-3'>
                        <IoIosNotifications />
                        <p className='text-lg text-secondary-900 hidden md:flex'>Notifications</p>
                    </li>
                </NavLink>
                <NavLink className='SidbarNav' to={`/profile/${authUser?.username}`}>
                    <li className='md:flex md:items-center md:gap-x-3 md:justify-start'>
                        <FaUser />
                        <p className='text-lg text-secondary-900 hidden md:flex'>Profile</p>
                    </li>
                </NavLink>
            </ul>
            {
                isLoading ? (
                    <ProfileBtnSkeleton />
                ) : (
                    <button className='text-secondary-900 hover:text-error w-full flex items-center justify-center text-xl duration-100 transition-all md:justify-between md:px-3'>
                        <img
                            onClick={() => navigate(`/profile/${authUser?.username}`)}
                            className='h-8 w-8 rounded-full object-cover hidden md:flex'
                            src={authUser?.profileImg || '/avatar-placeholder.png'}
                            alt="profileImage"
                        />
                        <div
                            className='hidden md:block text-left'
                            onClick={() => navigate(`/profile/${authUser?.username}`)}
                        >
                            <h2 className='text-lg text-secondary-900 font-bold'>{authUser?.fullName}</h2>
                            <p className='text-sm text-secondary-400'>@{authUser?.username}</p>
                        </div>
                        {
                            isPending ? (
                                <Loading size='xs' />
                            ) : (
                                <TbLogout2 onClick={() => logoutUser()} />
                            )
                        }
                    </button>
                )
            }
        </nav >
    )
}

export default Sidbar
