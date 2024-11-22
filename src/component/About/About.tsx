import React from "react";
import laptopimg from "../../assets/withlaptop.jpg";
import servericon from "../../assets/server.png"
import cursoricon from "../../assets/cursor.png"
import aboutdata from "../../data/aboutitem.json";
interface AboutData {
    title: string;
    description: string;
    img:string;
  }
  const aboutData:aboutData[]=aboutdata;
function About() {
    let aboutitems=aboutData.map((v,i)=>{
        return(
            <Aboutitem key={i} aboutitems={v} />
        )
    })
    
  return (
    <div className="font-roboto my-color-text ">
    <div className="grid grid-cols-2 ml-28 mt-16">
      <div className="">
        <h1 className="text-[35px] pb-5">Hi,I'm Rakibul Alam</h1>
        <p className="w-[60%] text-[20px] pb-8 leading-relaxed">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <button className="bg-[#576cbc] text-[18px] p-2 rounded-3xl">Contact Me</button>
      </div>
      <div className="ml-44">
        {/* @TODO */}
        <div className="bg-[#5f73b0] h-[300px] w-[300px] rounded-full">

        </div>
      </div>
    </div>
    <div className="bg-[#091019] h-auto w-[83%] ml-28 mt-5 rounded-xl">
    <h1 className="text-[25px] p-12">About</h1>
    <div className="grid grid-cols-2">
        <div>
            <img src={laptopimg} alt="" className="h-[180px] w-[180px] ml-20 rounded-xl"/>
        </div>
        <div>
            {aboutitems}
        </div>
    </div>
    </div>
    
    </div>
  );
}
function Aboutitem({aboutitems})
{
    console.log("Raki")
    console.log(aboutitems.icon)
    let imgsrc;
    if(aboutitems.icon==="server.png")
        {
            imgsrc=servericon;
        }
        else if(aboutitems.icon==="cursor.png")
            {
                imgsrc=cursoricon;
            }
            else imgsrc="";
    return(
        <div className="flex gap-4 ">
            
                <img src={imgsrc} alt="" className="h-5 w-5 " />
            
            <div className="w-[80%]" >
                <h1 className="font-bold text-xl">{aboutitems.Title}</h1>
                <p className="text-sm">I'm a frontend developer with experience in building responsive and optimized sites</p>
            </div>
        </div>
    )
}

export default About;
