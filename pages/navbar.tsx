import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useContext } from 'react'
import { Context } from './index'

const links: any = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#project' },
    { name: 'Testimonials', href: '#testimonial' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    const { isDarkMode }: any = useContext(Context)
    const CreateLink = ({ href, linkName }: any) => {
        return <Link
            href={href}
            className={'p-4 cursor-pointer border-b-2 -mb-1 hover:border-b-2 ' + (isDarkMode ? 'hover:border-white border-b-gray-450' : 'border-white hover:border-b-gray-450')}>
            {linkName}
        </Link>
    }

    const CreateMobileLink = ({ href, linkName }: any) => {
        return <Link
            href={href}
            className='py-4 cursor-pointer border-b border-gray-300 w-full -mb-1'>
            {linkName}
        </Link>
    }

    return (
        <>
            <div className={'flex items-center justify-between z-50 sm:px-16 px-2 shadow-nav top-0 w-full lg:pb-1 ' + (isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')}>
                <div className="flex items-center">
                    <Image
                        src='/../public/assets/logo.png'
                        alt="logo"
                        width={55}
                        height={55}
                        className='p-1'
                    />
                    <h3 className='sm:text-4xl text-xl font-bold'>Unique Group</h3>
                </div>
                <div className="items-center gap-4 font-normal text-18 hidden lg:flex">
                    {links.map((link: any, index: number) => {
                        return <CreateLink key={index} href={link.href} linkName={link.name} />
                    })}
                </div>
                <button className='lg:hidden' onClick={() => setIsMenuBtnClicked(!isMenuBtnClicked)}>
                    <AiOutlineMenu className='w-8 h-6' />
                </button>
            </div>
            <div className={"items-start px-4 gap-4 font-normal text-18 fixed top-[50px] z-50 w-full h-full flex flex-col lg:hidden " + (isMenuBtnClicked ? ' ' : 'hidden ') + (isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')}>
                {links.map((link: any, index: number) => {
                    return <CreateMobileLink key={index} href={link.href} linkName={link.name} />
                })}
            </div>
        </>
    )
}