import React from 'react'

export default function Gallery() {
  return (
    <div className='w-full h-full pt-40 pb-10 pl-3 pr-3'>
      <h1 className='text-6xl font-bold'>Gallery</h1>
      <div className="grid grid-cols-6 grid-rows-6 gap-4 my-5">
        <div className="col-span-4 row-span-3">
          <img src="/grid3.webp" className='h-96 w-[75rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
        <div className="col-span-3 row-span-3 col-start-4 row-start-4">
          <img src="/grid6.webp" className='h-96 w-[65rem] rounded-md object-cover object- bg-slate-400' alt="" />

        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1">
          <img src="/grid2.webp" className='h-96 w-[65rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
        <div className="col-span-3 row-span-3 col-start-1 row-start-4">
          <img src="/grid9.webp" className='h-96 w-[65rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
      </div>

      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-3 col-start-4 row-start-1">
          <img src="/grid10.webp" className='h-[40rem] w-[75rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
        <div className="col-span-4 row-span-3 col-start-3 row-start-4">
          <img src="/bluebike.jpg" className='h-[40rem] w-[75rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-4">
          <img src="/redblack.webp" className='h-[40rem] w-[75rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
        <div className="col-span-3 row-span-3 col-start-1 row-start-1">
          <img src="/grid7.webp" className='h-[40rem] w-[75rem] rounded-md object-cover object- bg-slate-400' alt="" />
        </div>
      </div>


    </div>
  )
}
