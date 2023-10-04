import React from 'react';
import { useState } from 'react';

const Registration = () => {
  // function
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //  error
  const [errClientName, setErrClientName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');

  // name function
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName('');
  };
  // email function
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };
  // password function
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };
  // cnfrmpassword function
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrConfirmPassword('');
  };
  //email validation
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // submit function
  const clickHandlerRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName('Name is mandatory');
    }
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
    if (!confirmPassword) {
      setErrConfirmPassword('Confirm Password is mandatory');
    } else {
      if (confirmPassword !== password) {
        setErrConfirmPassword("Password doesn't match");
      }
    }
    if (
      clientName &&
      email &&
      validateEmail(email) &&
      password &&
      password.length >= 8 &&
      confirmPassword &&
      confirmPassword === password
    ) {
      console.log(clientName, email, password, confirmPassword);
      setClientName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };
  return (
    <div className='w-full'>
      <div className='w-full bg-white pb-10 '>
        <form className='w-[350px] mx-auto flex flex-col items-center '>
          <div className='w-full border bg-gray-300 border-zinc-200 p-6 mt-5'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 '>
              Create Account
            </h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Your Name</p>
                <input
                  onChange={handleName}
                  type='text'
                  value={clientName}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
                {errClientName && (
                  <p className='text-red-500 italic text-[10px] font-semibold items-center gap-2 px-1 -mt-1'>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Enter your Email</p>
                <input
                  onChange={handleEmail}
                  type='email'
                  value={email}
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
                  onChange={handlePassword}
                  type='password'
                  value={password}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
                {errPassword && (
                  <p className='text-red-500 italic text-[10px] font-semibold items-center gap-2 px-1 -mt-1'>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium '>Confirm-Password</p>
                <input
                  onChange={handleConfirmPassword}
                  type='password'
                  value={confirmPassword}
                  className='w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput '
                />
                {errConfirmPassword && (
                  <p className='text-red-500 italic text-[10px] font-semibold items-center gap-2 px-1 -mt-1'>
                    {errConfirmPassword}
                  </p>
                )}
              </div>
              <p className='text-xs text-gray-500 -mt-2'>
                Password must be atleast 8 character
              </p>
              <button
                onClick={clickHandlerRegistration}
                className='w-full  py-1.5 text-sm font-normal rounded-sm bg-[#f0c14b]  active:border-yellow-800 active:shadow-amazonInput mt-2'
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
