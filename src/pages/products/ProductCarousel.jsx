'use client'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductCarousel = ({ images, currentIndex }) => {
    console.log(images);
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                selectedItem={currentIndex || 0}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img, index) => (
                    <img
                        key={index}
                        src={img.img}
                        alt={`Images ` + index}
                        className="select-none"
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;