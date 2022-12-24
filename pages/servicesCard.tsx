import Image from "next/image"

export default function ServicesCard({ cardImage, cardTitle, cardSubtitle }: any) {
    return (
        <div className='w-full outline-card bg-gray-150 hover:bg-blue-500 text-black hover:text-white'>
            <Image
                src={cardImage}
                alt="card"
                width={200}
                height={200}
            />
            <h3>{cardTitle}</h3>
            <p>{cardSubtitle}</p>
            <div className="flex text-gray-150 items-center justify-between">
                <h1>arrow</h1>
                <h3>description</h3>
            </div>
        </div>
    )
}