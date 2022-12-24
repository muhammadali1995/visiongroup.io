import ServicesCard from './servicesCard'

export default function Services() {
    const cards: any = [
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
        { img: '/../public/assets/logo.png', title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.' },
    ]
    return (
        <div className='px-16'>
            <h1 className='title'>Our Services</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2'>
                {cards.map((card: any, index: any) => {
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