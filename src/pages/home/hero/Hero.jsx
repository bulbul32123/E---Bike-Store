import React, { useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import RightSidebar from '../../../components/RightSidebar';
import Indicators from '../../../components/Indicators';

export default function Hero({ data }) {
    const [active, setActive] = useState(0);

    const nextSlider = () => {
        setActive((prev) => prev === data.length - 1 ? 0 : prev + 1);
    };

    const prevSlider = () => {
        setActive((prev) => prev === 0 ? data.length - 1 : prev - 1);
    };


    return (
        <>
        <div className="absolute  md:-top-28 sm:-top-10 -top-0 -right-32 sm:-right-40  lg:-top-32 lg:-right-60 h-[500px] w-[500px] sm:h-[650px] sm:w-[650px] md:h-[700px] md:w-[700px] lg:h-[858px] lg:w-[807px] grident rounded-full"></div>
            <div className="w-full h-full md:relative md:z-[3] pt-16 sm:pt- mb-28 flex flex-col justify-center items-center">
                <div className="flex max-md:flex-col-reverse justify-between  items-center">
                    <LeftSide />
                    <RightSide data={data} prevSlider={prevSlider} nextSlider={nextSlider} active={active} />
                </div>
                <Indicators data={data} prevSlider={prevSlider} nextSlider={nextSlider} active={active} setActive={setActive}/>
            </div>
            <RightSidebar />
        </>
    )
}


