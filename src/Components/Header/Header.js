import React, { useEffect } from 'react';
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { LuLogOut } from 'react-icons/lu';
import { CiLocationOn } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Data from '../../Data/Data';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../../redux/amazonSlice';
import { UserConsumer } from '../../context/userContext';
import { toast } from 'react-toastify';
import { GrUserAdmin } from 'react-icons/gr';
import { RiAdminFill } from 'react-icons/ri';

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);
  const {
    userName,
    setUserName,
    profileData,
    setProfileData,
    accessToken,
    setAccessToken,
    userProfile,
    fetchProfileData,
  } = UserConsumer();

  const handleLogout = () => {
    signOut(auth);
    setProfileData(null);
    setAccessToken(null);
    navigate('/');
    toast.error('logout successfully');
  };

  return (
    <div className='w-full bg-e_blue text-whiteText px-4 py-3 flex justify-around items-center gap-5 sticky top-0 z-50'>
      {accessToken ? (
        <Link to='/home'>
          <div className='headerHover flex flex-col'>
            <SiHomeassistantcommunitystore className='w-24 mt-2' />
            <span className='text-md font-semibold'>E - Mart</span>
          </div>
        </Link>
      ) : (
        <Link to='/'>
          <div className='headerHover flex flex-col'>
            <SiHomeassistantcommunitystore className='w-24 mt-2' />
            <span className='text-md font-semibold'>E - Mart</span>
          </div>
        </Link>
      )}
      {accessToken ? (
        <Link to='/home'>
          <div className='flex flex-col items-start justify-center headerHover'>
            <p className='text-sm text-center font-semibold -mt-1 hidden mdl:inline-flex'>
              Home
            </p>
          </div>
        </Link>
      ) : (
        ''
      )}
      <Link to='/about'>
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-sm text-center font-semibold -mt-1 hidden mdl:inline-flex'>
            About
          </p>
        </div>
      </Link>
      <Link to='/cart'>
        <div className='flex items-center justify-center headerHover relative  p-2'>
          <HiOutlineShoppingCart />
          <p className='text-xs font-semibold  text-whiteText px-3'>
            Cart
            <span className='absolute text-xs -top-0.5 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-e_blue rounded-full flex justify-center items-center'>
              {products.length > 0 ? products.length : 0}
            </span>
          </p>
        </div>
      </Link>
      <Link to={`/profile`}>
        <div>
          {accessToken ? (
            <div className='bg-blue-200 rounded-lg duration-200 hover:scale-125'>
              <GrUserAdmin size={30} className='p-1' />
            </div>
          ) : (
            <Link to='/'>
              <div>
                <RiAdminFill className='cursor-default' />
                <p className='cursor-default'> Kindly Sign in</p>
              </div>
            </Link>
          )}
        </div>
      </Link>
      {accessToken ? (
        <Link to='/' className='no-underline'>
          <p
            className='text-whiteText font-normal text-sm headerHover hover:scale-105'
            onClick={handleLogout}
          >
            <LuLogOut size={20} />
          </p>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;
