import React from 'react'
import random from '../../assets/projects/random-password.png'
import projectsJson from "../../data/projects.json"
import { getUrlimg } from '../../utils/Geturlimg';

function Project() {
    interface projectData{
        images:string;
        title:string;
        skills:string[];
    }
    const projectData:projectData[]=projectsJson;
    const projectItem=projectData.map((v,i)=>{
        return(
                <ProjectCard pritems={v} key={i} />
        )
    })
  return (
    <div className='font-roboto my-color-text w-[80%] mx-auto mt-5 ' id='projects'>

         <h1 className="text-[25px] mb-9 mt-2">PROJECTS</h1>
         <div className='mb-10 my-4 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 '>
            {/* <ProjectCard /> */}
            {projectItem}

         </div>

    </div>
  )
}
function ProjectCard({pritems}){
    return(
        <div className='bg-[#132a53] shadow-pink-700 hover:shadow-2xl  grid grid-cols-1 place-items-center mx-auto p-5 rounded-2xl'>
                <img src={getUrlimg(pritems.images)} alt="" className='w-[320px] h-[320px] rounded-2xl'  />
                <h1 className=' w-full text-xl mt-5'>{pritems.title}</h1>
                <div className='grid grid-cols-3 text-sm gap-2 w-full mt-5'>
                    {pritems.skills.map((v,i)=>{
                        return(
                            <p className='bg-[#0b2447] text-center rounded-2xl' key={i}>{v}</p>
                        )
                    })}
                  
                </div>
                <div className='grid grid-cols-2 gap-12 mt-5'>
                    <button className='#576cbc text-xl bg-[#576cbc] w-20 rounded-2xl'>Demo</button>
                    <button className='#576cbc text-xl bg-[#576cbc] w-20 rounded-2xl'>Source</button>
                </div>
            </div>
    )
}

export default Project