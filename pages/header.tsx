import Image from "next/image"
import { useContext, useState } from 'react'
import { Context } from './index'

export default function Header() {
    const { isDarkMode }: any = useContext(Context)
    return (
        <div id="home" className={'flex lg:items-start justify-between px-16 lg:pt-40 pt-20 flex-col lg:flex-row items-center text-center lg:text-left ' + (isDarkMode ? '' : '')}>
            <div>
                <h1 className="font-normal lg:text-5xl sm:text-4xl text-3xl leading-[56px]">We Serve <br className="hidden sm:block" /> Marine Industry</h1>
                <hr className="mt-4 w-36 bg-gray-450 h-[3px] mx-auto lg:mx-0" />
                <p className="lg:text-2xl my-5 font-normal">Your Trusted Partner For
                    <br className="hidden sm:block" />
                    Electrical & Instrumentation, Structural,
                    <br className="hidden sm:block" />
                    Cruise Outfitting</p>
                <button className="bg-green-450 mx-auto lg:mx-0 sm:px-8 px-3 py-2 flex items-center text-white font-bold sm:text-xl">
                    <span className="mr-2">Download Brochure</span>
                    <svg width="33" height="16" viewBox="0 0 33 16" fill="none"><path d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z" fill="white"></path></svg>
                </button>
            </div>
            <div>
                <img src="https://uniquegroup.sg/heroImage.png" className="lg:-mt-14 w-[808px] h-[490px]" alt="header" />
            </div>
        </div>
    )
}