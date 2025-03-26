import SkillCard from '@/components/SkillCard'
import React from 'react'

const Skills = () => {

    const skills = [

        {skill:"Flutter", icon:"./assets/flutter.png"},
        {skill:"Django", icon:"./assets/django.png"},
        {skill:"Tailwind", icon:"./assets/tailwind.png"},
        {skill:"NextJs", icon:"./assets/next.png"},
        {skill:"Firebase", icon:"./assets/firebase.png"},
        {skill:"Postgress", icon:"./assets/postgress.png"},
        {skill:"MongoDb", icon:"./assets/mongodb.png"},
     

    ];

    
  return (
    <div className='h-screen bg-secondary'>
         <div className="text-center flex flex-col mx-auto p-8">
      <h1 className="text-4xl text-golden-yellow font-bold">SKILLS</h1>
      <h2 className="text-2xl font-semibold mt-2">What I Am Great At</h2>
      <h3 className="text-17 w-80 text-center mx-auto">
        Your computer skills are your passport to a world where innovation knows no bounds, 
        and your journey is defined by the code you write and the problems you solve.
      </h3>
    </div>
    
    <div className='grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3  lg:w-3xl  mx-auto'>
  
    { skills.map((item,index)=> (<SkillCard key={index} skill={item.skill} icon={item.icon} />))}

    </div>
   
    </div>
  )
}

export default Skills