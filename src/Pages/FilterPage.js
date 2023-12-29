import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../src/redux/amazonSlice';
import { IoArrowBack } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const FilterPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    toast.success('Items added to cart');
  };

  useEffect(() => {
    // Fetch data from the FakeStore API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Apply category filter
    if (categoryFilter) {
      const filtered = products.filter(
        (product) => product.category === categoryFilter
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFilter, products]);

  return (
    <div>
      <Link to='/'>
        <button className='bg-orange-300 m-5'>
          <span className='flex justify-center item-center'>
            <IoArrowBack size={30} />
          </span>
        </button>
      </Link>

      <div className='mt-[1rem] '>
        <label className=''>
          Filter by category:
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value=''>All</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </label>

        <div className='max-w-screen-2xl mt-5  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
          {filteredProducts.map((product) => (
            <div key={product.id} className=''>
              <div
                key={product.id}
                className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4  '
              >
                <div>
                  <div className='w-full h-auto flex items-center justify-center '>
                    <img
                      className='w-52 h-64 object-contain '
                      src={product.image}
                      alt='ProductImage'
                    />
                    <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
                      {product.category}
                    </span>
                  </div>
                  <div className='px-4'>
                    <div className='flex items-center justify-between'>
                      <h2 className='font-titleFont tracking-wide text-lg text-e_blue font-medium'>
                        {product.title.substring(0, 15)}
                      </h2>
                      <p className='text-sm text-gray-600 font-semibold'>
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className='text-sm px-4 mb-3'>
                      {product.description.substring(0, 55)}...
                    </p>
                  </div>
                  <div>
                    <div onClick={handleClick}>
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: product.id,
                              title: product.title,
                              description: product.description,
                              price: product.price,
                              category: product.category,
                              image: product.image,
                              quantity: 1,
                            })
                          )
                        }
                        className='w-3/4 absolute bottom-2 left-7 py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
