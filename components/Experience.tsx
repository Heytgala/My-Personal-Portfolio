import React from 'react'
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'

const Experience = () => {
    return (
        <div className="py-20 min-h-screen" id="Experience">
            <h1 className="heading">
                Work <span className="text-purple">Experience</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button key={card.id} duration={Math.floor(Math.random() * 10000) + 10000} borderRadius='1.75rem' className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                        <div className="p-3 py-6 md:p-5 lg:p-10">
                            <div className="flex lg:flex-row flex-col lg:items-center gap-2">
                                <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-16 md:w-10 w-8" />
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                            </div>
                            <ul className="text-start text-white-100 mt-3 font-semibold list-disc list-inside">
                                {card.desc.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience
