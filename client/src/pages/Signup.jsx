import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import axios from "axios"

const signupSchema = yup.object({
    name : yup.string().required("username is required"),
    email: yup.string().email("Invalid Email").required("email is required").trim(),
    password:yup.string().matches(/^\d{6}$/, "Password must be exactly 6 digits").length(6,"Password exactly 6 Digits").required("password is required")
});


const Signup = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(signupSchema),
    })

    const Submit=async(data)=>{
        try {
            const response = await axios.post("http://localhost:7000/api/auth/register",data);
            console.log(response.data.data)
            if(response.status==201){
                Swal.fire({
                    title:"Signup",
                    icon:"success",
                    text : response.data.message,
                })
            }
        } catch (error) {
            Swal.fire({
                title:"Signup",
                text:"Signup Failed !!",
                icon:"error"
            })
        }
    }
   
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6  rounded-4xl shadow-2xl  mt-10 border-2 w-xl lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Start Your Daily Quotes Journey.</h1>
        <p className="mt-4 text-gray-600">
        Join now and start your day with meaningful quotes.
        </p>
      </div>
      <form  className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(Submit)}>
         <div>
          <label className="sr-only" htmlFor="name" >Name</label>
          <div className="relative">
            <input placeholder="Enter your Name" {...register("name")}   className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="name" type="text" />
            {errors.name && <p className='ms-1 text-red-500'>{errors.name.message}</p>}
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="email" >Email</label>
          <div className="relative">
            <input placeholder="Enter your email" {...register("email")}   className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="email" type="email" />
            {errors.email && <p className='ms-1 text-red-500'>{errors.email.message}</p>}
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="password">Password</label>
          <div className="relative">
            <input placeholder="Enter your password"  aria-describedby='password-error' aria-invalid={errors.password ? "true":"false"} {...register("password")} className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="password" type="password" />
            {errors.password && <p className='ms-1 text-red-500'>{errors.password.message}</p>}
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="inline-block w-full rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
