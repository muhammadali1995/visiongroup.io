import Image from 'next/image'
import { projects } from './data'

function ProjectCard({ cardImage, cardTitle, cardSubtitle }: any) {
    return (
        <div className='w-full cursor-pointer mx-auto bg-white max-w-[405px]' style={{ 'filter': 'drop-shadow(4px 8px 8px rgba(0,0,0,.08))' }}>
            <div className="text-blue-450 cardImage">
                <Image
                    src={cardImage}
                    alt="project"
                    width={405}
                    height={55}
                    className='p-1'
                />
            </div>
            <div className='py-2 px-4'>
                <h3 className="mt-6 font-normal text-xl text-blue-450">{cardTitle}</h3>
                <p className="mt-5 mb-10 font-normal">{cardSubtitle}</p>
            </div>
        </div>
    )
}

export default function Project() {
    return (
        <div className='lg:px-16' id="project">
            <h1 className='title mt-16 mb-8'>Our Project</h1>
            <div className='grid lg:grid-cols-3 gap-4'>
                {projects.map((card: any, index: any) => {
                    return <ProjectCard
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