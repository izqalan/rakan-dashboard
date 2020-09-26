import React from "react";
import drawPlan from "../../resources/draw_rect.gif";
import Rule from "./ruler";

const Fload = () => {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-row p-4 mx-10 mt-20 border-2 border-dashed rounded-md">
				<div className="flex h-full items-center content-center">
					<div className="flex flex-col w-full h-3/5-vh items-center">
						<div className="w-full text-center text-gray-400 text-2xl font-semibold">Draw Area</div>
						<div className="text-center text-gray-400 text-sm font-normal">Draw your building floor plan. We'll do the calculation for you.</div>
						<div className="h-10 w-full">
							<Rule types="horizontal" />
						</div>
						<div id="canvas" className="flex flex-row w-full">
							<div className="h-full w-10">
								<Rule types="vertical" />
							</div>
							<div className="w-17/20 h-full flex justify-center items-center align-center">
								<img className="h-2/5-vh pt-4 " src={drawPlan} alt="draw_floor_plan" />
							</div>
						</div>		
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fload;