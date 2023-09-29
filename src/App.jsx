import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App () {
  return(
    <div className ="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
            <h1 className =" bg-white rounded-lg w-11/12 text-center  px-10 py-2 text-3xl font-bold mx-auto mt-[40px]">RANDOM GIFS</h1>

            <div className = "w-full flex flex-col items-center gap-y-10 mt-[32px]">
              <Random/>
              <Tag/>
            </div>
    </div>
  )
}
export default App;
