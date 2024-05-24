import React from 'react'
import Image1 from "./../assets/category/gaming.png";
import Image2 from "./../assets/category/vr.png";
import Image3 from "./../assets/category/speaker.png";


const category = () => {
    return (
        <div className='py-8  '>
            <div className='container '>
                <div className='grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-8 '>




                    {/* first col  */}
                    <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-600/90 to-gray-100

                 text-white rounded-3xl relative h-[320px]
                flex items-end '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-40 mb-2'>
                                    Laptop
                                </p>
                                <div className='border bg-red-500 rounded-full w-30 py-2'>
                                    <button className='text-white ml-7' >Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <img src={Image1} alt='' className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0  ' />
                    </div>

                    {/* second col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-green-500/90
                to-green-400/70 text-white rounded-3xl relative h-[320px]
                flex items-start '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2'>
                                    Earphone
                                </p>
                                <div className='border bg-white rounded-full  w-30 py-2'>
                                    <button className='text-green-500 ml-7' >Shop Now</button>
                                </div>

                            </div>
                        </div>
                        <img src={Image2} alt='' className='w-[320px] absolute bottom-0 ' />
                    </div>
                    {/* third col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-blue-600
                to-blue-600/90 text-white rounded-3xl relative h-[320px]
                flex items-start '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold
                            opacity-40 mb-2'>
                                    Gadget
                                </p>
                                <div className='border bg-white rounded-full sm:w- w-36 py-2'>
                                    <button className='text-blue-500 ml-7' >Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <img src={Image3} alt='' className='w-[200px] absolute -bottom-0 right-0   ' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default category