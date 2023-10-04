import React from 'react';
import { useState } from 'react';
import { logo } from '../../Assets/index';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Data from '../../Data/Data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);
  console.log(products);
  return (
    <div className='w-full bg-e_blue text-whiteText px-4 py-3 flex items-center gap-5 sticky top-0 z-50'>
      <Link to='/'>
        <div className='headerHover '>
          <img className='w-24 mt-2' src={logo} alt='logo' />
        </div>
      </Link>
      <div className='headerHover hidden mdl:inline-flex'>
        <CiLocationOn />
        <p className='text-sm text-lightText font-light flex flex-col'>
          Deliver to
          <span className='text-sm font-semibold -mt-1 text-whiteText'>
            Cbe
          </span>
        </p>
      </div>
      <div className='h-10 rounded-md hidden md:flex flex-grow relative'>
        <span
          onClick={() => setShowAll(!showAll)}
          className='flex flex-row justify-center items-center w-14 h-full  text-e_blue bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-e-blue font-titleFont rounded-tl-md rounded-bl-md'
        >
          All<span></span>
          <RiArrowDropDownLine />
        </span>
        {showAll && (
          <div>
            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] borderz-amazon_blue text-black p-2 flex flex-col gap-1 z-50'>
              <Data />
            </ul>
          </div>
        )}
        <input
          type='text'
          className='h-full text-base text-e_blue flex-grow outline-none border-none px-2'
        />
        <span className='w-12 h-full flex items-center justify-center bg-e_yellow hover:bg-#f3a847 duration-300 text-e_blue cursor-pointer rounded-tr-md rounded-br-md'>
          <FaSearch />
        </span>
      </div>
      <Link>
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Hello,Sign in</p>
          <p className='text-sm font-semibold -mt-1 hidden mdl:inline-flex'>
            Accounts
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
    </div>
  );
};

export default Header;
