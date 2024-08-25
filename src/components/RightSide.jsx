import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { GoPlus } from "react-icons/go";

export default function RightSide({ data, prevSlider, nextSlider, active }) {
    const [openBrike, setOpenBrike] = useState(false);
    const [openLight, setOpenLight] = useState(false);
    const [openWheel, setOpenWheel] = useState(false);
    const brakeRef = useRef(null);
    const lightRef = useRef(null);
    const wheelRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (brakeRef.current && !brakeRef.current.contains(event.target)) {
                setOpenBrike(false);
            }
            if (lightRef.current && !lightRef.current.contains(event.target)) {
                setOpenLight(false);
            }
            if (wheelRef.current && !wheelRef.current.contains(event.target)) {
                setOpenWheel(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="relative z-[3]">
                <BsArrowLeftCircleFill className='arrow arrow-left md:hidden' onClick={prevSlider} />
                {
                    data.map((img, idex) => (
                        <img src={img.src} alt={img.alt} key={idex} className={`${active === idex ? 'slideImage' : 'slide-hidden'} pointer-events-none w-full max-xl:h-full xl:w-full select-none transition-all duration-300 ease-in-out`} />
                    ))
                }
                <BsArrowRightCircleFill className='arrow arrow-right md:hidden' onClick={nextSlider} />
                <div className="" ref={brakeRef}>
                    <button onClick={() => setOpenBrike((prev) => !prev)} className="bg-white absolute  right-[34%] top-[15%] flex justify-center items-center mx-auto h-9 w-9 z-[3] bg-opacity-60 backdrop-filter hover:scale-105 transitions rounded-full shadow-md shadow-black/40" >
                        <span><GoPlus size={25} className={`${openBrike ? 'rotate-45' : 'rotate-0'} transition-all duration-300 `} /></span>
                    </button>
                    <div className={`absolute top-[24%] brake-detail right-2 bg-[#C5E2F0]/[90%] sm:bg-[#89C8DD6CC6BC]/[60%] backdrop-blur-sm rounded-xl border-[#86C4D9]/[38%] border-2 flex  w-[15rem] sm:w-[22rem] py-5 h-22  text-xs sm:text-sm p-4 text-gray-900 ${openBrike ? 'opacity-1 z-[4]' : 'opacity-0 z-[-2]'} transition-all duration-300 flex-col`}>
                        <h3 className='font-extrabold text-[15px] mb-1'>Brake</h3>
                        <p>High-performance braking systems include either mechanical disc brakes, electronic brakes, or a combination of both, delivering reliable stopping power. </p>
                    </div>
                </div>
                <div className="" ref={lightRef}>
                    <button onClick={() => setOpenLight((prev) => !prev)} className={`left-[30%] top-[40%] bg-white absolute  flex justify-center items-center mx-auto h-10 w-10  bg-opacity-70 backdrop-filter hover:scale-105 transitions rounded-full shadow-md shadow-black/40
                     `}
                    >
                        <span ><GoPlus size={25} className={`${openLight ? 'rotate-45' : 'rotate-0'} transition-all duration-300 `} /></span>
                    </button>
                    <div className={`absolute top-[50%] light-detail left-0  bg-[#C5E2F0]/[80%] sm:bg-[#89C8DD6CC6BC]/[50%] backdrop-blur-sm rounded-xl border-[#86C4D9]/[38%] border-2 flex w-[15rem] sm:w-[22rem] py-5 h-22  text-xs sm:text-sm p-4 text-gray-900 ${openLight ? 'opacity-1 z-[4]' : 'opacity-0 z-[-2]'} transition-all duration-300 flex-col`}>
                        <h3 className='font-extrabold text-[15px] mb-1'>Light</h3>
                        <p>Equipped with bright LED headlights for clear visibility during night rides, along with rear taillights that enhance safety by alerting others when you brake.  </p>
                    </div>
                </div>
                <div className="" ref={wheelRef}>
                    <button onClick={() => setOpenWheel((prev) => !prev)} className="left-[15%] top-[60%] bg-white absolute  flex justify-center items-center mx-auto h-16 w-16 z-[3] bg-opacity-70 backdrop-filter hover:scale-105 transitions rounded-full shadow-md shadow-black/40">
                        <span ><GoPlus size={25} className={`${openWheel ? 'rotate-45' : 'rotate-0'} transition-all duration-300 `} /></span>
                    </button>
                    <div className={`absolute top-[75%] wheel-detail left-2  bg-[#C5E2F0]/[80%] sm:bg-[#89C8DD6CC6BC]/[50%] backdrop-blur-sm rounded-xl border-[#86C4D9]/[38%] border-2 flex w-[15rem] sm:w-[22rem] py-5 h-22 z-[5] text-xs sm:text-sm p-4 text-gray-900 ${openWheel ? 'opacity-1' : 'opacity-0'} transition-all duration-300 flex-col`}>
                        <h3 className='font-extrabold text-[15px] mb-1'>Wheels</h3>
                        <p>Electric scooters typically feature durable rubber tires that come in either solid or pneumatic forms. Pneumatic tires offer better shock absorption and a smoother ride</p>
                    </div>
                </div>
                <div className="absolute -bottom-22 sm:bottom-0 md:bottom-0 bike-detail sm:-right-5  bg-[#7DB9CE]/[25%] backdrop-blur-sm sm:rounded-xl border-[#86C4D9]/[38%] border-2 flex justify-center items-center w-full sm:w-[22rem] py-5 h-22 z-[4] text-sm gap-8 sm:gap-5">
                    <div className="flex flex-col ">
                        <p className='text-base'>50 km/hr</p>
                        speed
                    </div>
                    <div className="flex flex-col ">
                        <p className='text-base'>80km</p>
                        battery range
                    </div>
                    <div className="flex flex-col ">
                        <p className='text-base'>3.5hr</p>
                        charging time
                    </div>
                </div>
            </div >
        </>
    )
}
