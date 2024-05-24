import React from 'react'
import Image1 from "./../assets/category/earphone.png";
import Image2 from "./../assets/category/watch.png";
import Image3 from "./../assets/category/macbook.png";

const category = () => {
    return (
        <div className='py-8  '>
            <div className='container '>
                <div className='grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-8 '>
                    {/* first col  */}
                      <div className='py-10 pl-5 bg-gradient-to-br from-black/90
                to-black/70 text-white rounded-3xl relative h-[320px]
                flex items-end '>
                                    <div>
                                        <div className='mb-4'>
                                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                            <p className='text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2'>
                                                Earphone
                                            </p>
                                            <div className='border bg-red-500 rounded-full  w-30 py-2'>
                                    <button className='text-white ml-7' >Shop Now</button>
                                </div>

                                        </div>
                                    </div>
                                    <img src={Image1} alt='' className='w-[320px] absolute bottom-0' />
                                </div>
                         
                           
                    {/* second col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-yellow-400/90
                to-yellow-400/90 text-white rounded-3xl relative h-[320px]
                flex items-end '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-40 mb-2'>
                                    Gadget
                                </p>
                                <div className='border bg-red-500 rounded-full sm:w- w-36 py-2'>
                                    <button className='text-white ml-7' >Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <img src={Image2} alt='' className='w-[320px] absolute -right-4 lg:top-[40px]   ' />
                    </div>
                    {/* third col  */}
                    <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-red-500/90
                to-red-500/90 text-white rounded-3xl relative h-[320px]
                flex items-end '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-40 mb-2'>
                                    Laptop
                                </p>
                                <div className='border bg-white rounded-full w-30 py-2'>
                                    <button className='text-red-500 ml-7' >Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <img src={Image3} alt='' className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0  ' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default category