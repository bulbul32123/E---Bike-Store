import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import Counter from "./Couter";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { productdata } from "../../data";

const Product = ({ data }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showError, setShowError] = useState(false);
    const [stocksOut, setStockOutError] = useState(false);
    const { cart } = useSelector((state) => state.cart)
    console.log(cart);
    const dispatch = useDispatch()

    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        });
    };

    const p = data
    const isQuantityOverStocksForColor = cart.some(item => item?.id === data?.id && item.selectedColor === selectedColor && item.quantity >= p.stocks);
    const { id, title, stocks, price, imgs, subtitle } = productdata
    const selectedCartProductImg = imgs.filter((img) => img.color === selectedColor)
    const selectImg = selectedCartProductImg[0]
    const cartData = { id, title, stocks, subtitle, price, img: selectImg }
    return (
        <div className="w-full md:py-32">
            <ToastContainer />
            <>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[60px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full lg:mx-0">
                        <ProductCarousel images={data.imgs} currentIndex={selectedColorIndex} />
                    </div>
                    <div className="flex-[1] h-full w-full pb-3">
                        <div>
                            <p className="text-base mb-1 title-font text-gray-500 tracking-widest capitalize">{p?.category}</p>
                            <h1 className="text-black text-xl sm:text-3xl title-font font-medium mb-1">{p?.title}</h1>
                            <div className="flex justify-between">
                                <p className="text-black text-2xl mt-1.5 ">${p?.price}</p>
                                <p className="text-black text-xl mt-1.5">Stocks: {p?.stocks}</p>
                            </div>
                        </div>
                        <div className="mt-3 flex max-sm:flex-col gap-3 w-full sm:items-center" id="colorGrid">
                            <div className="flex gap-3">
                                {p?.colors?.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => { setSelectedColor(color); setShowError(false); setSelectedColorIndex(index) }}
                                        className={`h-8 w-8 rounded-full border ${selectedColor === color ? 'ring-gray-800 ring-4' : 'ring-2'} ring-offset-2 transition duration-100`}
                                        style={{ backgroundColor: color }}
                                    ></button>
                                ))}
                            </div>
                            <Counter stocks={p.stocks} quantity={quantity} setQuantity={setQuantity} />
                        </div>
                        <div className="mb-5 mt-2">
                            {showError && <div className="text-red-600">Color selection is required</div>}
                            {stocksOut && <div className="text-red-600">Sorry, the stocks are out.</div>}
                            {isQuantityOverStocksForColor && <div className="text-red-600">Sorry, this color of products is over. It's Stocks is 6.</div>}
                        </div>
                        <button
                            className={`w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ${isQuantityOverStocksForColor && 'cursor-not-allowed bg-black/25'}`}
                            onClick={() => {
                                if (!selectedColor) {
                                    setShowError(true);
                                    document.getElementById('colorGrid').scrollIntoView({
                                        block: 'center',
                                        behavior: 'smooth'
                                    })
                                } else if (p.stocks >= 1) {
                                    if (isQuantityOverStocksForColor) {
                                        setShowError(false);
                                    } else {
                                        notify();
                                        setShowError(false);
                                        dispatch(addToCart({ ...cartData, selectedColor, quantity }));
                                    }
                                } else {
                                    setStockOutError(true);
                                    document.getElementById('colorGrid').scrollIntoView({
                                        block: 'center',
                                        behavior: 'smooth'
                                    })
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                        <div>
                            <div className="text-lg font-bold mb-5">Product Details</div>
                            <div className="markdown text-md mb-5">
                                <p>{p.des}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Product;