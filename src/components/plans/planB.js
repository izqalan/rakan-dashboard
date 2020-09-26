import React from "react";
import "../../styles/planB.css"

const PlanB = () => {
  return (
    <div class="parent1 h-full w-full bg-deepLight">
      <div class="a flex items-center border-2">
        <p className="w-full text-center text-white ">Computer Lab </p>
      </div>
      <div class="b flex items-center border-2">
        <p className="w-full text-center text-white ">Conference Room</p>
      </div>
      <div class="c flex items-center border-2">
        <p className="w-full text-center text-white ">Study Area</p>
      </div>
      <div class="d flex items-center border-2">
        <p className="w-full text-center text-white ">cafeteria</p>
      </div>
      <div class="e flex items-center border-2">
        <p className="w-full text-center text-white ">Common/event Space</p>
      </div>
      <div class="f flex items-center border-2">
        <p className="w-full text-center text-white ">Entrance</p>
      </div>
    </div>
  )
}

export default PlanB;