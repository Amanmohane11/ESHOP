import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-5 place-items-center'>
            {/* card section  */}
            { data.map((data)=>(
                    <div className='group' key={data.id}>
                        <div className='relative'>
                            <img src={data.img} alt=''
                             className='h-[180px] w-[260px] object-cover
                            rounded-md'/>
                            {/* hover button  */}
                            <div className='
                            hidden group-hover:flex
                             absolute top-1/2 
                            -tarnslate-u-1/2 left-1/2 -translate-x-1/2 
                              justify-center items-center
                             duration-200'>
                                <button className=' bg-red-500 w-32 h-8 rounded-full text-white'>Add to cart</button>
                            </div>
                        </div>

                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>Rs.{data.price}</h2>
                            </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ProductCard