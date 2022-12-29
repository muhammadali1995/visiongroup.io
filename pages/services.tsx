import { cards } from './data'
import { useContext, useState } from 'react'
import { Context } from './index'

function ServicesCard({ cardImage, cardTitle, cardSubtitle }: any) {
    const { isDarkMode }: any = useContext(Context)
    return (
        <div className={'w-full p-10 cursor-pointer card ' + (isDarkMode ? 'text-white bg-gray-450 hover:bg-blue-450 hover:text-white' : 'text-gray-450 bg-gray-150 hover:bg-blue-450 hover:text-white')} style={{ "outline": "1px solid rgba(0,0,0,.15)" }}>
            <div className="text-blue-450 cardImage">{cardImage}</div>
            <h3 className="mt-6 font-normal text-xl">{cardTitle}</h3>
            <p className="mt-5 mb-10 font-normal">{cardSubtitle}</p>
            <div className="flex text-gray-150 items-center justify-between font-normal">
                <h1>View</h1>
                <svg width="32" height="14" viewBox="0 0 33 16" fill="none"><path d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z" fill="currentColor"></path></svg>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <div className='lg:px-16' id="services">
            <h1 className='title sm:mt-20 mt-10 sm:mb-16 mb-8'>Our Services</h1>
            <div className='lg:grid-cols-3 sm:grid-cols-2 md:grid hidden'>
                {cards.map((card: any, index: any) => {
                    return <ServicesCard
                        key={index}
                        cardImage={card.img}
                        cardTitle={card.title}
                        cardSubtitle={card.subtitle}
                    />
                })}
            </div>
            <div className='lg:grid-cols-3 sm:grid-cols-2 md:hidden grid'>
                {cards.slice(0, 4).map((card: any, index: any) => {
                    return <ServicesCard
                        key={index}
                        cardImage={card.img}
                        cardTitle={card.title}
                        cardSubtitle={card.subtitle}
                    />
                })}
            </div>
        </div>
    )
}