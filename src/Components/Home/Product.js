import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';
import { UserConsumer } from '../../context/userContext';
import { toast } from 'react-toastify';
import { GoSearch } from 'react-icons/go';
import { FaFilter } from 'react-icons/fa';

const Product = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  const { accessToken } = UserConsumer();
  const [search, setSearch] = useState('');

  const handleClick = () => {
    toast.success('Items added to cart');
  };

  const toastMsg = () => {
    toast.success('Kindly Login to add items to the cart');
  };

  return (
    <>
      <div className='mt-[2.5rem] relative z-30 md:-mt-3 lg:-mt-24 '>
        <div className='flex justify-center items-center w-f pb-4 z-50 '>
          <div className=''>
            <input
              className=' text-base rounded-sm text-e_blue px-1  border outline-none border-gray-500  py-1.5 border-none '
              type='search'
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              placeholder='Search Products'
            />
          </div>
          <span className='w-12 py-2.5 flex items-center justify-center bg-e_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
            <GoSearch />
          </span>
        </div>
      </div>

      <div className='flex justify-center items-center mb-1 md:absolute top-[55%] right-5 '>
        <Link to='/filter'>
          <button className='flex  px-8 py-2 justify-center items-center  bg-orange-300'>
            <span className='flex justify-center items-center'>
              <FaFilter />
            </span>
            <button>Filter Products</button>
          </button>
        </Link>
      </div>

      <div className='max-w-screen-2xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 xl:gap-10 px-4 '>
        {productData
          .filter((row) => {
            if (search == '') {
              return row;
            } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
              return row;
            }
          })

          .map((item) => (
            <div
              key={item.id}
              className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 '
            >
              <div className='w-full h-auto flex items-center justify-center '>
                <img
                  className='w-52 h-64 object-contain '
                  src={item.image}
                  alt='ProductImage'
                />
                <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
                  {item.category}
                </span>
              </div>
              <div className='px-4'>
                <div className='flex items-center justify-between'>
                  <h2 className='font-titleFont tracking-wide text-lg text-e_blue font-medium'>
                    {item.title.substring(0, 15)}
                  </h2>
                  <p className='text-sm text-gray-600 font-semibold'>
                    ${item.price}
                  </p>
                </div>
              </div>
              <div>
                <p className='text-sm px-4 mb-3'>
                  {item.description.substring(0, 55)}...
                </p>
              </div>
              <div>
                {accessToken ? (
                  <div onClick={handleClick}>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            category: item.category,
                            image: item.image,
                            quantity: 1,
                          })
                        )
                      }
                      className='w-3/4 absolute bottom-2 left-7 py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'
                    >
                      Add to Cart
                    </button>
                  </div>
                ) : (
                  <Link to='/login'>
                    <button
                      className='w-3/4 absolute bottom-2 left-7 py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'
                      onClick={toastMsg}
                    >
                      Add to Cart
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
