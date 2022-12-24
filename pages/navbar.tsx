import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-16 shadow-nav fixed top-0 bg-white w-full'>
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
                <Link href={'/home'} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>Home</Link>
                <Link href={'/services'} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>Services</Link>
                <Link href={'/projects'} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>Projects</Link>
                <Link href={'/testimonial'} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>Testimonials</Link>
                <Link href={'/contact'} className='p-4 cursor-pointer border-b-2 border-white -mb-1 hover:border-b-2 hover:border-b-gray-450'>Contact</Link>
            </div>
        </div>
    )
}