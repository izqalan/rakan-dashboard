import React from "react";
import '../../styles/planA.css'

const PlanA = () => {

  return (
      <div class="parent h-full w-full bg-deepLight">
        <div class="div1 flex items-center border-2">
          <p className="w-full text-center text-white ">cafeteria</p>
        </div>
        <div class="div2 flex items-center border-2">
          <p className="w-full text-center text-white ">Recording Studio</p>
        </div>
        <div class="div3 flex items-center border-2">
          <p className="w-full text-center text-white ">Common/event Space</p>
        </div>
        <div class="div4 flex items-center border-2">
          <p className="w-full text-center text-white ">Study Area</p>
        </div>
        <div class="div5 flex items-center border-2">
          <p className="w-full text-center text-white ">Conference Room</p>
        </div>
      </div>
    
  )
}

export default PlanA;