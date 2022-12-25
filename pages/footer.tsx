export default function Footer() {
    return (
        <>
            <div className='px-16 bg-[#f7fbff] py-8 mt-9 lg:flex items-start justify-between' id="testimonial">
                <div className="flex items-center">
                    <div className='flex items-center text-sm'>
                        <img src="https://uniquegroup.sg/phone-call%201.svg" alt="phone" />
                        <p className="ml-6">+65 91858610</p>
                        <p className="ml-4">+65 88667210</p>
                    </div>
                    <div className="hidden md:flex items-center lg:hidden ml-20">
                        <img src="https://uniquegroup.sg/whatsapp%201.svg" alt="phone" />
                        <p className="ml-6 text-sm">+65 91858610</p>
                    </div>
                </div>
                <div className='flex items-start flex-col'>
                    <div className="md:hidden lg:flex items-center flex mt-4 lg:mt-0">
                        <img src="https://uniquegroup.sg/whatsapp%201.svg" alt="phone" />
                        <p className="ml-6 text-sm">+65 91858610</p>
                    </div>
                    <div className="flex items-center mt-3">
                        <img src="https://uniquegroup.sg/gmail%201.svg" alt="phone" />
                        <p className="ml-6 text-sm">sales@uniquegroup.sg</p>
                    </div>
                </div>
                <div className='flex items-center mt-4 lg:mt-0'>
                    <img src="https://uniquegroup.sg/placeholder%201.svg" alt="phone" />
                    <p className="ml-6 text-sm">10 Buroh Street, West Connect Building #07-32, <br /> Singapore 638739</p>
                </div>
            </div>
            <hr className="bg-black h-[2px]" />
            <div className="flex justify-center items-center bg-[#f7fbff] md:justify-between px-16 py-8">
                <h3 className="font-bold text-[18px] hidden md:block">Unique Group</h3>
                <p>Copyright © Unique Group, Inc</p>
            </div>
        </>
    )
}