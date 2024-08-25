import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function Indicators({ data, active, prevSlider, nextSlider, setActive }) {
    return (
        <>
            <div className="w-full h-full hidden md:inline-flex justify-between  items-center mt-10 lg:pl-40 lg:pr-40 pl-20 pr-20">
                <button className='flex cursor-pointer' onClick={prevSlider}><span><AiOutlineLeft size={24} /></span> Prev</button>
                <span className='indicators relative'>
                    {
                        data.map((img, idex) => (
                            <img
                                src={img.src}
                                alt={img.alt}
                                key={idex}
                                className={`${active === idex ? 'indicator' : 'indicator unActive-indicator'} select-none grident relative z-[4]`}
                                onClick={() => setActive(idex)}
                            />
                        ))
                    }
                    <div className="opacityBur"></div>
                </span>
                <button className='flex cursor-pointer' onClick={nextSlider}> Next <span><AiOutlineRight size={24} /></span></button>
            </div>
        </>
    )
}
