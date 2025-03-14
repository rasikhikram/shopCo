import React from 'react'

const Browse = () => {
  return (
    <>
      <div className='hidden lg:flex bg-gray-200 rounded-3xl w-full max-w-[1450px] flex flex-col items-center justify-center mx-auto py-16'>
        <h1 className='text-6xl font-superbold'>BROWSE BY DRESS STYLE</h1>
        <div className='flex mt-10 space-x-8'>
            <img src="/images/Casual.png" alt="" />
            <img src="/images/Formal.png" alt="" />
        </div>
        <div className='flex mt-8 space-x-8'>
            <img src="/images/Party.png" alt="" />
            <img src="/images/Gym.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Browse