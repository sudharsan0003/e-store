import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isTestBtn, setIsTestBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleLogin = (user) => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      setTimeout(() => {
        navigate('/home');
      }, 1500);
      toast.success('Login Successfully');
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem('email'));
  });

  const handleAuth = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { providerData } = user;
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      })
      .catch((err) => {
        console.log('Err', err.message);
      });
  };

  const handleFinalLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      handleAuth();
      toast.success('Login Successfully');
    } else toast.warning('Input Field Is Mandatory !');
  };

  return (
    <div className='w-full'>
      <div className=' border-[1px]  mt-4  w-[350px] mx-auto flex flex-col items-center text-black font-semibold text-lg bg-orange-300 rounded '>
        <div>
          <div className='w-full flex justify-center items-center heading mt-4'>
            Sign-in
          </div>{' '}
        </div>
        <div className=' text-white font-titleFont text-lg font-semibold px-6 py-2 flex justify-center items-center '>
          <div className='w-full flex flex-col justify-center items-center heading '>
            <form className='row  ' onSubmit={handleFinalLogin}>
              <div className='col-12 py-3'>
                <input
                  type='email'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='col-12 py-3'>
                <input
                  type='password'
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  text-black'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className='col-12 py-3 text-center'>
                <button
                  className={
                    'border border-white  bg-white/70 px-5 rounded duration-200 hover:scale-105'
                  }
                  type='submit'
                  style={{ color: '#000', fontWeight: '800' }}
                >
                  Sign-in
                </button>
              </div>
              <h5 className='text-center '> Or</h5>
              <div className=' flex justify-center items-center rounded'>
                <button
                  onClick={handleLogin}
                  className='border bg-white/70 text-black p-2 rounded mb-3 text-base duration-200 hover:scale-105'
                >
                  Sign-in with Google
                </button>
              </div>
            </form>
            <div>
              <div className='text-center justify-content-center mt-2 pt-2'>
                <p className='small font-light text-black -mt-4 pt-1 mb-0'>
                  Don't have an account ?
                  <Link
                    to='/registration'
                    className='ml-1 text-white'
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex   justify-center items-center my-2 '>
        <button
          className='px-2  py-1.5  text-sm text-white font-semibold rounded-sm mt-2 bg-[#4287f5]'
          onClick={() => setShow(!show)}
        >
          View Test Credential
        </button>
        {show ? (
          <div className=' flex flex-col  border-1 px-3 bg-blue-100 ml-3 border-blue-400 rounded mb-3'>
            <h6 className='font-semibold '>User Credential</h6>
            <p>
              <span className='font-semibold '>Email :</span> test@gmail.com
            </p>
            <p className='-mt-1'>
              <span className='font-semibold  '>Password :</span> 12121212
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;