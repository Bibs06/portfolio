import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface ProjectCardProps {
    projectName: string;
    link: string;
    desc: string;
    img: string | StaticImport;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, img, desc, link }) => {
    return (
        <div className=' h-120 embla__slide relative bg-secondary rounded-2xl  ' onClick={() => window.open(link)} >
            <Image className='object-cover h-full w-full rounded-2xl absolute lg:object-contain ' src={img} alt='project' width={100} height={100} />

            <div className='absolute rounded-2xl  bg-gradient-to-t from-black to-transparent opacity-100  flex flex-col justify-end z-1 lg:opacity-0 hover:opacity-100 h-full cursor-pointer p-3'>
                <h1 className=' font-bold text-4xl'>{projectName}</h1>
                <h3 className='w-fit'>{desc}</h3>
            </div>

        </div>
    )
}

export default ProjectCard