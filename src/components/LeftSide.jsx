import React from 'react'

export default function LeftSide() {
    return (
        <>
            <div className="lg:pr-20 md:inline hidden pl-16 xl:pl-0 pt-14">
                <h3 className='tracking-[0.7rem] uppercase font-medium mb-2'>let’s Ride the</h3>
                <h1 className="title-font md:text-7xl text-3xl mb-4 font-bold">FUTURE</h1>
                <p className="mb-8 mt-5 leading-relaxed max-w-[200px] text-[#42454A]">Simple and sleek design with users in mind.</p>
                <div className="">
                    <button className="inline-flex text-white bg-[#6EDACB] uppercase border-2 border-[#5EC6B8] py-2 px-6 focus:outline-none text-sm rounded ">Pre-Order</button>
                </div>
            </div>
            <div className="md:hidden absolute top-0 w-full h-full left-0 ">
                <div className="flex left-7 items-center w-full absolute z-[2] top-[19%] sm:top-[14%]">
                    <h3 className='tracking-[0.7rem] text-2xl uppercase font-medium mb-2'>let’s Ride the</h3>
                </div>
                <div className="flex justify-center items-center w-full absolute z-[2] top-[25%]">
                    <h1 className="title-font text-[5.5rem] sm:text-9xl text-black font-bold">FUTURE</h1>
                </div>
                <div className="flex justify-center sm:ml-7 items-center w-full absolute z-[3] top-[70%] sm:top-[50%]">
                    <button className="inline-flex text-white bg-[#6EDACB] uppercase border-2 border-[#5EC6B8] py-2 px-6 focus:outline-none text-sm rounded ">Pre-Order</button>
                </div>
            </div>
        </>
    )
}
