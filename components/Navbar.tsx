'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";


const navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav  className='fixed top-0 w-full z-50 bg-[#2E3034] flex flex-row px-5 lg:px-10 py-5 ' >
      <h1 className='font-primary  lg:text-3xl '>BJ<span className='text-golden-yellow'>.</span></h1>
      <ul className='hidden ml-auto gap-12 lg:flex'>
        <Link className='hover:text-golden-yellow font-bold cursor-pointer transition-all ' href={'/'}>Home</Link>
        <Link className='hover:text-golden-yellow font-bold cursor-pointer transition-all' href={'/'}>Skills</Link>
        <Link className='hover:text-golden-yellow font-bold cursor-pointer transition-all' href={'/'}>Projects</Link>
        <Link className='hover:text-golden-yellow font-bold cursor-pointer transition-all' href={'/'}>Contact</Link>
      </ul>

      <div className='lg:hidden ml-auto flex flex-row-reverse items-start '>

      <button  className='' onClick={() => setIsExpanded(!isExpanded)}>

        <Image src= {isExpanded ? "/assets/close.png" :"/assets/menu.png"} alt="Logo" width={22}
          height={22} />


      </button>


      {isExpanded && (
        <ul className='flex flex-col gap-5'>
          <Link className='font-bold cursor-pointer transition-all' href={'/'}>Home</Link>
          <Link className='font-bold cursor-pointer transition-all' href={'/'}>Skills</Link>
          <Link className=' hover:font-bold cursor-pointer transition-all' href={'/'}>Projects</Link>
          <Link className=' hover:font-bold cursor-pointer transition-all' href={'/'}>Contact</Link>
        </ul>
      )}
      </div>
    </nav>
  )
}

export default navbar 