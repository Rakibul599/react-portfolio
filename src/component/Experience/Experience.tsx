import React from "react";
import skilsobs from "../../data/skills.json"
import { getUrlimg } from "../../utils/Geturlimg";
function Experience() {
  interface Skills{
    title: string;
    imageSrc: string;
  }
  const Skills: Skills[]=skilsobs;
  let skilitem=Skills.map((v,i)=>{
    return(
      <SkitItems skdata={v} key={i} />
    )
    
  })
  return (
    <div className="font-roboto my-color-text w-[80%] mx-auto mt-5" id="experience">
      <h1 className="text-[25px]">EXPERIENCE</h1>
      <div className="">
        <div>
          <p className="text-center text-sm pb-5">These are the technologies I've worked with</p>
          <div className="grid grid-cols-4 gap-0 mt-4">
        
                {skilitem}
          
          </div>
        </div>
      </div>
    </div>
  );
}

function SkitItems({skdata})
{
  return(
    <div className="text-center mb-7 hover:scale-110 duration-500">
          <img src={getUrlimg(skdata.imageSrc)} alt="" className="w-[80px] h-[80px] ml-24 p-0 mb-5" />
          <p className="ml-0 text-sm">{skdata.title}</p>
    </div>

  )
}

export default Experience;
