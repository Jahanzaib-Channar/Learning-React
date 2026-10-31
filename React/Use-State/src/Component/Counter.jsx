// import React from 'react'
import React, { useState } from "react";

const Counter = () => {



  const [count, setcount] = useState(0);

 
  function increase() {
    setcount((prev) => prev + 1);
  }

  function decrease() {
    setcount((prev) => prev - 1);
  }

  function reset() {
    setcount(0);
  }

  return (
    <div>
      <div className="count w-fit h-25 bg-black text-8xl text-white text-center m-10 px-10">
        {count}
      </div>
      <div className="flex gap-2 m-4">
        <button
          className="increase w-10 h-10 bg-black text-2xl text-white text-center"
          onClick={increase}
        >
          +
        </button>
        <button
          className="decrease w-10 h-10 bg-black text-2xl text-white text-center"
          onClick={decrease}
        >
          -
        </button>
        <button
          className="reset w-20 h-10 bg-black text-2xl text-white text-center"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
};



  


export default Counter