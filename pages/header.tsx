import Image from "next/image"

export default function Header() {
    return (
        <div className='flex lg:items-start justify-between px-16 mt-40 flex-col lg:flex-row items-center text-center lg:text-left'>
            <div>
                <h1 className="font-normal text-5xl text-gray-450 leading-[56px]">We Serve <br className="hidden lg:block" /> Marine Industry</h1>
                <hr className="mt-4 w-36 bg-gray-450 h-[3px] mx-auto lg:mx-0" />
                <p className="text-2xl my-5 text-gray-450 font-normal">Your Trusted Partner For <br /> Electrical & Instrumentation, Structural, <br /> Cruise Outfitting</p>
                <button className="bg-green-450 mx-auto lg:mx-0 px-8 py-2 flex items-center text-white font-bold text-xl">
                    <span className="mr-2">Download Brochure</span>
                    <svg width="33" height="16" viewBox="0 0 33 16" fill="none"><path d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z" fill="white"></path></svg>
                </button>
            </div>
            <div>
                <Image
                    src='/../public/assets/header.png'
                    alt="header"
                    width={808}
                    height={490}
                    className="-mt-14"
                />
            </div>
        </div>
    )
}