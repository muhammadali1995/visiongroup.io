import Image from 'next/image'
import { contacts } from './data'

function ContactCard({ cardTitle, cardCreator, cardCompany }: any) {
    return (
        <div className='w-full cursor-pointer mx-auto bg-white max-w-[405px]' style={{ 'filter': 'drop-shadow(4px 8px 8px rgba(0,0,0,.08))' }}>
            <div className='py-2 px-4'>
                <div className='flex items-start'>
                    <h3 className='text-5xl w-16 text-blue-450 ml-2'>&#8216;&#8216;</h3>
                    <h3 className="font-normal text-xl mt-8 ml-4 capitalize max-w-[232px] leading-[36px]">{cardTitle}</h3>
                </div>
                <div className='flex items-center mt-14 pb-4'>
                    <div className='mr-4 p-4 rounded-full bg-[#d9d9d9] font-bold text-xl'>
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
    return (
        <div className='lg:px-16 bg-[#ebeced] mt-20 py-8' id="contact">
            <h1 className='title mt-16 mb-8'>Our Project</h1>
            <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2'>
                {contacts.map((card: any, index: any) => {
                    return <ContactCard
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