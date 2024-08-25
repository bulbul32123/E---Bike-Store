import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function RightSidebar() {
    return (
        <>
            <div className="xl:inline hidden">
                <div className="h-1/2 w-20 side-part-grident absolute right-0 top-0 z-[4]">
                    <div className="flex justify-between items-center w-full h-full flex-col">
                        <span className='pt-9'><CiSearch color='white' size={30} /></span>
                        <div className="">
                            <div className='transform text-white text-lg tracking-[0.5rem] rotate-90 whitespace-nowrap'>THE CONCEPT</div>
                        </div>
                        <p></p>
                    </div>
                </div>
                <div className="h-1/2 w-20 side-part-bottom-grident absolute right-0 bottom-0 z-[4]">
                    <div className="flex justify-center items-center w-full h-full">
                        <p className='transform text-white text-lg tracking-[0.5rem] rotate-90 whitespace-nowrap'>ELECTRIC - B</p>
                    </div>
                </div>
                <div className="opacityBur2"></div>
            </div>
        </>
    )
}
