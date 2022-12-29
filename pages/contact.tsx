import Image from 'next/image'
import { useContext, useState } from 'react'
import { Context } from './index'

const contacts: any = [
    { title: 'The team understands the seriousness of the situation and responds quickly.', creator: 'Ulf Viljanen', company: 'CEO, ICF Singapore' },
    { title: 'The team understands the seriousness of the situation and responds quickly.', creator: 'Ulf Viljanen', company: 'CEO, ICF Singapore' },
    { title: 'The team understands the seriousness of the situation and responds quickly.', creator: 'Ulf Viljanen', company: 'CEO, ICF Singapore' },
]

function ContactCard({ cardTitle, cardCreator, cardCompany, isDarkMode }: any) {
    return (
        <div className={'w-full cursor-pointer mx-auto max-w-[405px] ' + (isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')} style={{ 'filter': 'drop-shadow(4px 8px 8px rgba(0,0,0,.08))' }}>
            <div className='py-2 px-4'>
                <div className='flex items-start'>
                    <h3 className='text-5xl w-16 text-blue-450 ml-2'>&#8216;&#8216;</h3>
                    <h3 className="font-normal text-xl mt-8 ml-4 capitalize max-w-[232px] leading-[36px]">{cardTitle}</h3>
                </div>
                <div className='flex items-center mt-14 pb-4'>
                    <div className={'mr-4 p-4 rounded-full font-bold text-xl ' + (isDarkMode ? 'text-white bg-black' : 'bg-[#d9d9d9] text-gray-450')}>
                        {`${cardCreator}`.split(' ').map(e => e.slice(0, 1))}
                    </div>
                    <div>
                        <p className="text-xl font-normal">{cardCreator}</p>
                        <p className="font-normal text-sm">{cardCompany}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Contact() {
    const { isDarkMode }: any = useContext(Context)
    return (
        <div className={'lg:px-16 sm:mt-20 mt-10 py-8 ' + (isDarkMode ? 'bg-gray-450 text-white' : 'bg-[#ebeced] text-gray-450')} id="contact">
            <h1 className='title sm:mt-16 mt-0 mb-8'>Our Project</h1>
            <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2'>
                {contacts.map((card: any, index: any) => {
                    return <ContactCard
                        isDarkMode={isDarkMode}
                        key={index}
                        cardTitle={card.title}
                        cardCreator={card.creator}
                        cardCompany={card.company}
                    />
                })}
            </div>
        </div>
    )
}