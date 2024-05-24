import React from 'react'
import Header from '../Shared/Header'

import img1 from "../../assets/blogs/blog-1.jpg"
import img2 from "../../assets/blogs/blog-2.jpg"
import img3 from "../../assets/blogs/blog-3.jpg"


const Blogdata=[
    {
        title:"How to choose perfect Smartwatch",
        subtitle:"v yn kjnjhvtyffb nhj gcf f nkjbhgrdrbnkm lj iugty ftf  k ng d tf n j",
        published:"Jan 20,2024 by Dilshad",
        image:img1,
    },
    {
        title:"How to choose perfect gadget",
        subtitle:"v yn kjnjhvtyffb nhj gcf f nkjbhgrdrbnkm lj iugty ftf  k ng d tf n j",
        published:"Jan 20,2024 by Satya",
        image:img2,
    },
    {
        title:"How to choose perfect VR headset",
        subtitle:"v yn kjnjhvtyffb nhj gcf f nkjbhgrdrbnkm lj iugty ftf  k ng d tf n j",
        published:"Jan 20,2024 by Sabir",
        image:img3,
    },
    
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            {/* Heading section  */}
            <Header title="Recent News"
            subtitle={" Expolre our Blogs"}/>
            {/* Body section  */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-3
            md:grid cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* Blog card  */}
                {Blogdata.map((data)=>
                <div key={data.title}
                    className='bg-white dark:bg-gray-900'>
                        {/* image section  */}
                    <div className='overflow-hidden rounded-2xl mb-2 '>
                        <img src={data.image} alt=''
                        className='w-full h-[220px] object-cover *:
                        rounded-2xl hover:scale-105 duration-500'/>
                    </div>
                    {/* content sction  */}
                       <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 txet-sm text-gray-600
                        dark:text-gray-400'>{data.subtitle}</p>

                       </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Blogs