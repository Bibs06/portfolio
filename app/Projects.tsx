'use client';
import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'



const Projects = () => {

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])


  const projects = [
    { projectName: 'Palkkaran', link: 'https://play.google.com/store/apps/details?id=com.tecnavis.palkkaran', desc: 'Palkkaran App lets users buy products once or through a subscription and get updates on deliveries, invoices, and changes. They can track monthly charges, pause subscriptions, and see pending deliveries on a calendar. Payments are made directly to delivery boys for convenience.', img: '/assets/palkkaran.png' },
    { projectName: 'Flocklink', link: 'https://play.google.com/store/apps/details?id=com.byteriver.flocklinkapp', desc: 'Introducing Flocklink, the app created to bring church communities closer together in today’s fast-paced world. Whether you’re at home or on the go, Flocklink keeps you connected, engaged, and up-to-date with everything happening within your church community.', img: '/assets/flocklink.webp' },
    { projectName: 'Traez', link: 'https://play.google.com/store/apps/details?id=com.traez.app', desc: 'Avanza makes logistics easy with real-time tracking, consignment history, and driver monitoring. Manage transportation and manpower effortlessly with smart tools designed for the modern logistics industry.', img: '/assets/traez.webp' },


  ];


  return (
    <div className='bg-primary h-screen p-8'>
      <div className='text-center mx-auto p-0 flex flex-col gap-2'>


        <h1 className="text-4xl text-golden-yellow font-bold">My Projects</h1>
        <h1 className='text-2xl font-bold'>A Glimpse of My Work</h1>
        <p className='w-80 mx-auto'>Projects in the world of computers are like galaxies in the universe, each one waiting to be explored, developed, and interconnected to create something truly remarkable.</p>
      </div>
      <div className='mt-10 embla   lg:w-200 mx-auto ' ref={emblaRef} >
        <div className='embla__container '>

          {projects.map((item, index) => (<ProjectCard key={index} img={item.img} projectName={item.projectName} desc={item.desc} link={item.link} />))}
        </div>
      </div>
    </div>
  )
}

export default Projects