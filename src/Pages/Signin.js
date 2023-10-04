import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  //email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };
  //password
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };
  //email validation
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  //submit function
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail('Email is mandatory');
    } else {
      if (!validateEmail(email)) {
        setErrEmail('Enter a Valid Email');
      }
    }
    if (!password) {
      setErrPassword('Password is mandatory');
    } else {
      if (password.length < 8) {
        setErrPassword('Password must be at least 8 characters');
      }
    }
    if (email && password) {
      console.log(email, password);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <div className='w-full'>
      <div className='w-full bg-white pb-10 '>
        <form className='w-[350px] mx-auto flex flex-col items-center '>
          <div className='w-full border bg-gray-300 border-zinc-200 p-6 mt-5'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 '>
              Sign in
            </h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Enter your E-mail</p>
                <input
                  type='email'
                  value={email}
                  onChange={handleEmail}
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
                {errEmail && (
                  <p className='text-red-500 italic text-[10px] font-semibold items-center gap-2 px-1 -mt-1'>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Password</p>
                <input
                  type='password'
                  value={password}
                  onChange={handlePassword}
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
                {errPassword && (
                  <p className='text-red-500 italic text-[10px] font-semibold items-center gap-2 px-1 -mt-1'>
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleLogin}
                className='w-full  py-1.5 text-sm font-normal rounded-sm bg-[#f0c14b]  active:border-yellow-800 active:shadow-amazonInput'
              >
                Continue
              </button>
            </div>
          </div>
          <p className='w-full text-xs text-gray-600 mt-4 flex items-center '>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            <span className='w-1/3 text-center'>New to Amazon</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          </p>
          <Link to='/registration'>
            <button className='w-full p-3 mt-4 text-sm font-normal rounded-sm bg-[#f0c14b]   active:border-yellow-800 active:shadow-amazonInput'>
              Create Your Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
