import React, { useState } from "react";

function Nav() {
  let [menuStutus, setMenustutus] = useState<boolean>(false);
  return (
    <div className="flex justify-between  my-color-text text-[18px] w-[80%] mx-auto font-roboto relative z-20">
      <ul className=" mt-9">
        <li>
          <a href="">Rakibul</a>
        </li>
      </ul>
<ul className={`flex flex-col absolute top-16 text-[20px] sm:text-[18px] p-6 sm:p-0 text-center sm:text-start rounded-xl  sm:top-0 right-0  sm:relative  bg-[linear-gradient(0deg,rgba(25,55,109,0.2)_0%,rgba(25,55,109,1)_100%)] sm:bg-none sm:flex-row sm:mt-9 gap-2 sm:gap-8 ${menuStutus ? "":"hidden sm:flex"}` }>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <button className="absolute right-0 top-8 sm:hidden" onClick={()=>setMenustutus(!menuStutus)}>
        <span className={`text-2xl font-bold ${menuStutus ? "hidden" : ""}`}>&#9776;</span>
        <span className={`text-4xl font-bold ${menuStutus ? "" : "hidden"}`}>&times;</span>
      </button>
    </div>
  );
}

export default Nav;
