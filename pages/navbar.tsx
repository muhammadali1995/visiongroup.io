import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { links } from './data'

const CreateLink = ({ href, linkName }: any) => {
    return <Link href={href} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>{linkName}</Link>
}

const CreateMobileLink = ({ href, linkName }: any) => {
    return <Link href={href} className='py-4 cursor-pointer border-b border-gray-300 w-full -mb-1'>{linkName}</Link>
}

export default function Navbar() {
    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between z-50 px-16 shadow-nav fixed top-0 bg-white w-full lg:pb-1'>
                <div className="flex items-center">
                    <Image
                        src='/../public/assets/logo.png'
                        alt="logo"
                        width={55}
                        height={55}
                        className='p-1'
                    />
                    <h3 className='text-4xl font-bold'>Unique Group</h3>
                </div>
                <div className="items-center gap-4 font-normal text-18 text-gray-450 hidden lg:flex">
                    {links.map((link: any) => {
                        return <CreateLink href={link.href} linkName={link.name} />
                    })}
                </div>
                <button className='lg:hidden' onClick={() => setIsMenuBtnClicked(!isMenuBtnClicked)}>
                    <AiOutlineMenu className='w-8 h-6' />
                </button>
            </div>
            <div className={"items-start px-16 gap-4 font-normal text-18 text-gray-450 fixed w-full h-full bg-white top-[50px] flex flex-col lg:hidden " + (isMenuBtnClicked ? '' : 'hidden')}>
                {links.map((link: any) => {
                    return <CreateMobileLink href={link.href} linkName={link.name} />
                })}
            </div>
        </>
    )
}