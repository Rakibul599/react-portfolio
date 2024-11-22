import React from "react";
import laptopimg from "../../assets/withlaptop.jpg";
import servericon from "../../assets/server.png";
import cursoricon from "../../assets/cursor.png";
import aboutdata from "../../data/aboutitem.json";
interface AboutData {
  title: string;
  description: string;
  img: string;
}
const aboutData: aboutData[] = aboutdata;
function About() {
  let aboutitems = aboutData.map((v, i) => {
    return <Aboutitem key={i} aboutitems={v} />;
  });

  return (
    <div className="font-roboto my-color-text relative z-20" id="about">
      <div className="bg-[#091019] h-auto w-[83%] ml-28 mt-5 pb-10 rounded-xl">
        <h1 className="text-[25px] pt-10 pl-10">About</h1>
        <div className="grid grid-cols-2 mt-2 ">
          <div className="translate-y-[10%]">
            <img
              src={laptopimg}
              alt=""
              className="h-[250px] w-[230px] ml-28 rounded-xl"
            />
          </div>
          <div>{aboutitems}</div>
        </div>
      </div>
    </div>
  );
}
function Aboutitem({ aboutitems }) {
  console.log("Raki");
  console.log(aboutitems.icon);
  let imgsrc;
  if (aboutitems.icon === "server.png") {
    imgsrc = servericon;
  } else if (aboutitems.icon === "cursor.png") {
    imgsrc = cursoricon;
  } else imgsrc = "";
  return (
    <div className="flex mt-2 gap-7 p-3 w-[80%] rounded-2xl bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_100%]">
      <div className=" translate-y-[40%] ">
        <img src={imgsrc} alt="" className="h-5 w-5" />
      </div>
      <div className="w-full">
        <h1 className="font-bold text-xl">{aboutitems.Title}</h1>
        <p className="text-sm">
          I'm a frontend developer with experience in building responsive and
          optimized sites
        </p>
      </div>
    </div>
  );
}

export default About;
