import React from 'react'
import TextField from '../../ui/TextField'
import { useForm } from 'react-hook-form'

function EditProfileForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    return (
        <div className='w-full'>
            <h2 className='text-lg text-secondary-900 text-center font-bold mb-4'>Update Profile</h2>
            <form className='grid grid-cols-2 grid-rows-5 gap-2'>
                <TextField
                    name='fullName'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required'
                    }}
                    placeholder='Full Name'
                />
                <TextField
                    name='username'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required'
                    }}
                    placeholder='User Name'
                />
                <TextField
                    name='email'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    }}
                    placeholder='Email'
                />
                
                    <textarea
                        {...register('bio', {
                            required: 'this is required'
                        })}
                        placeholder='Bio'
                        className='w-full h-[2.7rem] p-1 text-sm border border-secondary-300 text-secondary-900 bg-transparent text-lg outline-none rounded-lg'
                    />
                
                <TextField
                    name='currentPassword'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required',
                        minLength: {
                            value: 6,
                            message: 'this field most be higher than 8'
                        },
                        maxLength: {
                            value: 15,
                            message: 'this field most be lower than 15'
                        }
                    }}
                    placeholder='Current Password'
                    type='password'
                />
                <TextField
                    name='newPassword'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required',
                        minLength: {
                            value: 6,
                            message: 'this field most be higher than 8'
                        },
                        maxLength: {
                            value: 15,
                            message: 'this field most be lower than 15'
                        }
                    }}
                    placeholder='New Password'
                    type='password'
                />
                <TextField
                    name='link'
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required: 'this is required'
                    }}
                    className='col-start-1 col-end-3'
                    placeholder='Link'
                />
                <button className='btn btn--primary_fill col-start-1 col-end-3'>Update</button>
            </form>
        </div>
    )
}

export default EditProfileForm
