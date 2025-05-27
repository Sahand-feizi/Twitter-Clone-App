import React from 'react'
import XSvg from '../features/svg/X'
import { useForm } from 'react-hook-form'
import TextField from '../ui/TextField'
import { FaUser } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import useLoginUser from '../features/auth/useLoginUser'
import Loading from '../ui/Loading';

function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()
    const { loginUser, isLoading } = useLoginUser()

    const onSubmit = (data) => {
        loginUser(data)
    }

    return (
        <div className='flex flex-col px-10 max-w-sm mx-auto pt-10 sm:gap-x-8 sm:max-w-screen-sm sm:flex-row'>
            <div>
                <XSvg className='fill-white w-32 sm:w-full sm:h-full' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 sm:max-w-sm'>
                <h1 className='font-bold mb-4 text-5xl text-center'>Let's go.</h1>
                <TextField
                    register={register}
                    errors={errors}
                    name='username'
                    placeholder='username ...'
                    icon={<FaUser />}
                    validationSchema={{
                        required: 'this is required'
                    }}
                />
                <TextField
                    register={register}
                    errors={errors}
                    type='password'
                    name='password'
                    placeholder='password ...'
                    icon={<PiPasswordFill />}
                    validationSchema={{
                        required: 'this is required',
                        minLength: {
                            value: 6,
                            message: 'this field most be higher than 6'
                        },
                        maxLength: {
                            value: 15,
                            message: 'this field most be lower than 15'
                        }
                    }}
                />
                <button type='submit' className='btn btn--primary_fill w-full'>
                    {
                        isLoading ? (
                            <Loading size='sm'/>
                        ) : 'Login'
                    }
                </button>
                <h2 className='text-lg'>Don't have an account?</h2>
                <button onClick={() => navigate('/singup')} className='btn btn--primary_outline w-5/6 mx-4'>Singup</button>
            </form>
        </div>
    )
}

export default Login
