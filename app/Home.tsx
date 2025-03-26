import React from 'react'
import Image from 'next/image'

export const Home = () => {
    return (
        <div className='bg-primary px-5 lg:px-10 py-5 flex flex-col lg:flex-row  justify-center   h-screen relative font-primary '>
            <div className='flex flex-col  absolute lg:px-10  lg:left-0 z-10 gap-3 top-20 lg:top-35 md:top-30'>
                <h1 className='font-primary font-bold text-4xl '>Bibin</h1>
                <h1 className='font-primary font-bold text-4xl '>Jose<span className='text-golden-yellow'>.</span></h1>
                <div className='bg-golden-yellow w-15 h-1'></div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/bibinjose23/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-bold'
                    >
                        LinkedIn |
                    </a>
                    <a
                        href="https://github.com/BIBS06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-bold'
                    >
                        Github
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/iam_bibs_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-bold'
                    >
                        Instagram |
                    </a>
                    <a
                        href="https://twitter.com/BIBS0623"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-bold'
                    >
                        X
                    </a>
                </div>
                <a

                    href={'/assets/resume.pdf'}
                    download="resume.pdf"
                    className='border-golden-yellow border-1 rounded-md text-center py-1 font-bold'
                >
                    Resume
                </a>
            </div>


            <div className='absolute bottom-0 mx-auto'>
                <Image alt="bibs" src={"/assets/bibs.png"} width={500} height={500} />
            </div>

            <div className='flex flex-col pr-5 py-4 lg:px-10  z-0 gap-2 absolute bottom-0 lg:right-0 lg:top-25  lg:w-md '>
                <h5 className='md:text-2xl text-golden-yellow font-extrabold'>INTRODUCTION</h5>
                <h3 className='md:text-2xl font-extrabold'>Flutter Developer,</h3>
                <h3 className=' md:text-2xl font-extrabold'>Web Developer</h3>
                <p className='text-sm  md:text-xl text-justify  font-bold'>Hello, I'm a dynamic and ambitious Flutter and web developer graduated from St. Joseph College of Engineering and Technology. With a strong foundation in programming and a love for creating innovative mobile and web applications, I'm excited to bring my skills and passion to the world of technology.</p>

            </div>

        </div>
    )
}
