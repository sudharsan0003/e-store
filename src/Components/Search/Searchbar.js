// import React, { useState, useEffect } from 'react';
// import { GoSearch } from 'react-icons/go';
// import axios from 'axios';

// const Searchbar = () => {
//   const [search, setSearch] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((response) => {
//         console.log(response);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className='  flex  md:flex rounded-md bg-[#f3a847] h-8 '>
//       <div className='flex'>
//         <input
//           className=' text-base rounded-sm text-e_blue  outline-none border-none px-3'
//           type='search'
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//           value={search}
//         />
//         <span className='w-12  flex items-center justify-center bg-e_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
//           <GoSearch />
//         </span>
//       </div>
//       {data
//         .filter((row) => {
//           if (search == '') {
//             return row;
//           } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
//             return row;
//           }
//         })
//         .map((row, i) => {
//           return (
//             <div className='card' key={i}>
//               {/* <div className='image'>
//                 <img src={row.image} alt={row.image} />
//                 <div className='title'>
//                   <h2>{row.title.substring(0, 20)}</h2>
//                   <p>${row.price}</p>
//                 </div>
//               </div> */}
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default Searchbar;

// // map((item) => (
// //     <div
// //       key={item.id}
// //       className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 '
// //     >
// //       <div className='w-full h-auto flex items-center justify-center '>
// //         <img
// //           className='w-52 h-64 object-contain '
// //           src={item.image}
// //           alt='ProductImage'
// //         />
// //         <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
// //           {item.category}
// //         </span>
// //       </div>
// //       <div className='px-4'>
// //         <div className='flex items-center justify-between'>
// //           <h2 className='font-titleFont tracking-wide text-lg text-e_blue font-medium'>
// //             {item.title.substring(0, 15)}
// //           </h2>
// //           <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
// //         </div>
// //       </div>
// //       <div>
// //         <p className='text-sm px-4 mb-3'>
// //           {item.description.substring(0, 55)}...
// //         </p>
// //       </div>
// //       <div>
// //         {accessToken ? (
// //           <div onClick={handleClick}>
// //             <button
// //               onClick={() =>
// //                 dispatch(
// //                   addToCart({
// //                     id: item.id,
// //                     title: item.title,
// //                     description: item.description,
// //                     price: item.price,
// //                     category: item.category,
// //                     image: item.image,
// //                     quantity: 1,
// //                   })
// //                 )
// //               }
// //               className='w-3/4 absolute bottom-2 left-7 py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'
// //             >
// //               Add to Cart
// //             </button>
// //           </div>
// //         ) : (
// //           <Link to='/login'>
// //             <button
// //               className='w-3/4 absolute bottom-2 left-7 py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'
// //               onClick={toastMsg}
// //             >
// //               Add to Cart
// //             </button>
// //           </Link>
// //         )}
// //       </div>
// //     </div>
// //   ));
