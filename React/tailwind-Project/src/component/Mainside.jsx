import React from "react";
import Navbar from "./navbar";
import Loginform from "./Loginform";


const main = () => {

  const style = {
     backgroundColor: "black",
    color: "white",  
  }
  
  return (
    <>
    <div className="w-full h-full px-10 bg-[#FAF3E1] ">
      <Navbar />
      <div className="flex">
         <Loginform/>
        
      </div>
     
    </div>
    </>
  );
};

export default main;
