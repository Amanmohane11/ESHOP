import React from 'react'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';



const Menulinks=[
{
  id:1,
  name:"Home",
  link:"/#"
},
{
  id:2,
  name:"Shop",
  link:"/#shop"
},
{
  id:1,
  name:"About",
  link:"/#about"
},
{
  id:1,
  name:"Blogs",
  link:"/blog"
},
]

const Dropdownlinks=[
  {
    id:1,
    name:"Trending products",
    link:"/#",
  },
  {
    id:1,
    name:"Best Selling",
    link:"/#",
  },
  {
    id:1,
    name:"Top Rated",
    link:"/#",
  }
]

const Navbar = () => {
  return (
    <div className='bg-slate-100 text-black duration-200 frelative z-40 w-full'>
        <div className='py-4'>
            <div className='container flex justify-between items-center  '>
                {/* {logo and links section} */}
                <div className='flex gap-5 item-center ml-5 '>
                    <a href='#'
                    className='text-red-700 font-semibold tracking-widest text-2xl lg:ml-[-37px] uppercase sm:text-3xl'>Eshop</a>
                    {/* {menu items} */}
                    <div>
                      <ul className='flex gap-5 py-1   '>
                        {
                        Menulinks.map((data,index)=>
                        (
                          <li key={index}> 
                            <a href={data.link}
                            className='inline-block font-semibold 
                            hover:text-black'>{data.name}</a>
                          </li>
                        ))}
                        {/* Dropdown */}
                        <li className='relative cursor-pointer group'>
                          <a href='#' className='flex items-center gap-[2px] 
                          font-semibold text-black-500 dark:hover:text-white 
                          '>
                            Quick Links 
                            <span>
                              <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                            </span>
                          </a>
                            <div className='absolute z-[9999] hidden group-hover:block
                            w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 
                            dark:text-white'>
                              <ul className='space-y-2'>
                               { 
                                  Dropdownlinks.map((data,index)=>(
                                    <li key={index} >
                                     <a className='text-gray-500 hover:text-black
                                     dark:hover:text-wh duration-200 inline-block w-full
                                     p-2 hover:bg-red-400 rounded-md font-semibold ' href={data.link}>
                                      {data.name}
                                     </a>
                                    </li>
                                  ))
                               }
                              </ul>
                            </div>
                        </li>
                      </ul>
                    </div>
                </div>
                {/* {Navbar right section} */}
                <div className='flex justify-between items-center gap-12'>
                 {/* {search bar section} */}
                <div className='relative group hidden sm:block '>
                  <input type='text' placeholder='  Search'
                  className='search-bar'/>
                  <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400
                   absolute top-2 -translate-y-1/right-3 duration-200 '/>
                </div>
                {/* {order button section } */}
                <button className='relative p-3' >
                  <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
                  <div className='w-4 h-4 bg-red-500 text-white
                  rounded-full absolute top-0 right-0 flex
                  items-center justify-center text-xs'>4</div>
                </button>
                {/* {Dark mode section} */}
                <div>
                  {/* <Darkmode/> */}
                </div>
                </div>
              
            </div>
            {/* {navbar right section} */}
        </div>
    </div>
  )
}

export default Navbar