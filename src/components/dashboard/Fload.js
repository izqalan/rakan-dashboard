import React from "react";
import drawPlan from "../../resources/draw_floor.gif";

const Fload = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="flex-row h-full p-4 mx-10 my-20 border-2 border-dashed rounded-md">
				<div className="flex h-full items-center content-center">
					<div className="flex flex-col w-full h-full items-center">
						<div className="w-full text-center text-gray-400 text-2xl font-semibold">Draw Area</div>
						<div className="text-center text-gray-400 text-sm font-normal">Draw your building floor plan. We'll do the calculation for you.</div>
						<div>
							<img src={drawPlan} alt="draw_floor_plan"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fload;