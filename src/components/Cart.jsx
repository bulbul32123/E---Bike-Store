
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../features/Slice'

const products = [
    {
        id: 1,
        name: 'Electric Bike - Black',
        href: '#',
        color: 'E-bike',
        price: '$90.00',
        quantity: 3,
        imageSrc: '/bike-1.webp',
        imageAlt: 'Electric Bike - White',
    },
    {
        id: 2,
        name: 'Electric Bike - Red',
        href: '#',
        color: 'E-bike',
        price: '$90.00',
        quantity: 1,
        imageSrc: '/bike-2.webp',
        imageAlt: 'Electric Bike - Red',
    },
    {
        id: 3,
        name: 'Electric Bike - Orange',
        href: '#',
        color: 'E-bike',
        price: '$90.00',
        quantity: 2,
        imageSrc: '/bike-3.webp',
        imageAlt: 'Electric Bike - Orange',
    },
    // More products...
]

export default function Cart({ setOpen, open }) {
    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totalPrice = cart?.reduce((total, currnt) => total + currnt.price * currnt.quantity, 0)

    return (
        <div className="relative 2xl:max-w-[1400px] z-[14]">
            <div onClick={() => setOpen(false)}
                className={` inset-0 2xl:max-w-[1400px] mx-auto cursor-pointer bg-gray-400 bg-opacity-75 transition-opacity duration-500 ease-in-out ${open ? 'opacity-1 fixed z-[-3] translate-x-0' : 'opacity-1 translate-x-[-100%]'} `}
            />
            <div className={`pointer-events-none fixed 2xl:absolute 2xl:top-5 right-0 flex max-w-[1400px] pl-10 ${open ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className={`pointer-events-auto bg-black transform transition duration-500 ease-in-out  ${open ? 'translate-x-0' : 'translate-x-[200%]'} duration-500`}
                >
                    <div className="flex 2xl:pt-10 h-screen flex-col overflow-y-scroll app shadow-xl ">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close panel</span>
                                        <p>Close</p>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    {
                                        cart.length > 0 ? (
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {cart?.map((product) => (
                                                    <li key={product?.id} className="flex py-6 hover:bg-slate-200">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img
                                                                alt={product?.title}
                                                                src={product?.img?.img}
                                                                className="h-full w-full object-cover object-center"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a>{product?.subtitle} <span className='capitalize'>{product?.selectedColor}</span></a>
                                                                    </h3>
                                                                    <p className="ml-4">${product?.price}</p>
                                                                </div>
                                                                <p className="mt-1 text-sm capitalize text-gray-500">{product?.selectedColor}</p>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <p className="text-gray-500">Qty {product?.quantity}</p>

                                                                <div className="flex">
                                                                    <button onClick={() => dispatch(removeCartItem(product))} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>) : <div className="flex flex-col justify-center pt-20">
                                            <p className="text-center text-gray-500 text-lg mb-3">Your cart is empty</p>
                                            <img src="/cartEmpty.png" alt="Cart Empty" className='h-40 w-auto object-center object-cover' />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={`${cart.length > 0 ? '' : 'hidden'} border-t border-gray-200 px-4 py-6 sm:px-6`}>
                            <div className={` ${cart.length > 0 ? '' : 'hidden'} flex justify-between text-base font-medium text-gray-900`}>
                                <p>Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <button
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
