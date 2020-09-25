import React, { useEffect, useState } from "react";
import LoadingOverlay from 'react-loading-overlay';
import PlanA from '../plans/planA';
import PlanB from '../plans/planB';

const LoadedFloor = () => {
	const [loadingFloor, setloadingFloor] = useState(false);

	useEffect(() => {
		setloadingFloor(true)
		const timer = setTimeout(() => {
			setloadingFloor(false)
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	const [planName, setplanName] = useState("HLX Floor 11(a)");
	const [floorPlan, setfloorPlan] = useState("a");

	const clickPlanA = () => {
		setplanName("HLX Floor 11(a)");
		setfloorPlan("a");
	}

	const clickPlanB = () => {
		setplanName("HLX Floor 11(b)");
		setfloorPlan("b");
	}

	return (
		<LoadingOverlay
			active={loadingFloor}
			spinner
			text='Building Floor Plan...'
		>
			{loadingFloor ? <div className="h-screen" /> :
				<div className="flex flex-col h-full">
					<div className="flex-row h-full p-4 mx-10 mt-10 mb-5 border-2 border-dashed rounded-md">
						<div className="flex h-full">
							<div className="flex flex-row w-full items-center content-center">
								<div className="flex flex-col items-start h-full w-2/3">
									<div className="w-full text-center text-gray-400 text-2xl font-semibold">{planName}</div>
									{floorPlan === "a" ? <PlanA /> : <PlanB />}
								</div>
									<div className="w-1/3 p-8">
										<div className="flex flex-row items-center rounded-lg bg-deepLight m-4 py-4">
											<div className="flex flex-col h-full w-full items-center">
												<div className="w-full text-center text-gray-400 m-2">Alternate Designs</div>
												<button onClick={clickPlanA} className="p-4 px-8 h-1/2 w-auto hover:bg-deep rounded-lg my-2 mx-4">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><g id="Compass"><path d="M55,8a7,7,0,0,0-6.92,6H36v2H48V55a1,1,0,0,0,2,0,5,5,0,0,1,10,0v.21A4.8,4.8,0,0,1,55.21,60H4V39.317A27.1,27.1,0,0,0,28,54a1,1,0,0,0,0-2,24.84,24.84,0,0,1-10.829-2.508l.621-2.316a2.925,2.925,0,0,0,2.654-2.2L23.738,32.7A17.905,17.905,0,0,0,26,32.971V34a1,1,0,0,0,2,0V32.971a17.905,17.905,0,0,0,2.262-.269l3.291,12.271a2.921,2.921,0,0,0,2.655,2.2l.826,3.084A1,1,0,0,0,38,51a1.013,1.013,0,0,0,.259-.034,1,1,0,0,0,.707-1.225l-.825-3.077a3.008,3.008,0,0,0,1.2-3.233L32.779,18.943A6.981,6.981,0,0,0,31,9.264V6a4,4,0,0,0-8,0V9.264a6.981,6.981,0,0,0-1.779,9.679L14.653,43.435a3,3,0,0,0,1.206,3.228l-.5,1.86A24.971,24.971,0,0,1,4,33.972V16H18V14H2V62H55.21A6.8,6.8,0,0,0,62,55.206V15A7.008,7.008,0,0,0,55,8ZM28,30.94V30a1,1,0,0,0-2,0v.94a15.911,15.911,0,0,1-1.735-.2l2.348-8.758c.129.007.256.02.387.02s.258-.013.387-.02l2.348,8.758A15.911,15.911,0,0,1,28,30.94Zm9.413,13.005a1.009,1.009,0,0,1-.7,1.225h0l-.006,0a1,1,0,0,1-.755-.1.983.983,0,0,1-.459-.608L29.351,21.585a6.98,6.98,0,0,0,1.807-.967ZM25,6a2,2,0,0,1,4,0V8.3a6.927,6.927,0,0,0-4,0Zm2,4a5,5,0,1,1-5,5A5.006,5.006,0,0,1,27,10ZM16.586,43.949l6.256-23.331a6.98,6.98,0,0,0,1.807.967L18.513,44.467a1,1,0,0,1-1.21.708l-.009,0h0A1.009,1.009,0,0,1,16.586,43.949ZM60,50.105a6.991,6.991,0,0,0-10,0V15a5,5,0,0,1,10,0Z" /><path d="M27,18a3,3,0,1,0-3-3A3,3,0,0,0,27,18Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,27,14Z" /></g></svg>
												</button>
												<p className="text-white text-xs">HLX Floor 11(a)</p>
												<button onClick={clickPlanB} className="p-4 px-8 h-1/2 w-auto hover:bg-deep rounded-lg my-2 mx-4">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><g id="Compass"><path d="M55,8a7,7,0,0,0-6.92,6H36v2H48V55a1,1,0,0,0,2,0,5,5,0,0,1,10,0v.21A4.8,4.8,0,0,1,55.21,60H4V39.317A27.1,27.1,0,0,0,28,54a1,1,0,0,0,0-2,24.84,24.84,0,0,1-10.829-2.508l.621-2.316a2.925,2.925,0,0,0,2.654-2.2L23.738,32.7A17.905,17.905,0,0,0,26,32.971V34a1,1,0,0,0,2,0V32.971a17.905,17.905,0,0,0,2.262-.269l3.291,12.271a2.921,2.921,0,0,0,2.655,2.2l.826,3.084A1,1,0,0,0,38,51a1.013,1.013,0,0,0,.259-.034,1,1,0,0,0,.707-1.225l-.825-3.077a3.008,3.008,0,0,0,1.2-3.233L32.779,18.943A6.981,6.981,0,0,0,31,9.264V6a4,4,0,0,0-8,0V9.264a6.981,6.981,0,0,0-1.779,9.679L14.653,43.435a3,3,0,0,0,1.206,3.228l-.5,1.86A24.971,24.971,0,0,1,4,33.972V16H18V14H2V62H55.21A6.8,6.8,0,0,0,62,55.206V15A7.008,7.008,0,0,0,55,8ZM28,30.94V30a1,1,0,0,0-2,0v.94a15.911,15.911,0,0,1-1.735-.2l2.348-8.758c.129.007.256.02.387.02s.258-.013.387-.02l2.348,8.758A15.911,15.911,0,0,1,28,30.94Zm9.413,13.005a1.009,1.009,0,0,1-.7,1.225h0l-.006,0a1,1,0,0,1-.755-.1.983.983,0,0,1-.459-.608L29.351,21.585a6.98,6.98,0,0,0,1.807-.967ZM25,6a2,2,0,0,1,4,0V8.3a6.927,6.927,0,0,0-4,0Zm2,4a5,5,0,1,1-5,5A5.006,5.006,0,0,1,27,10ZM16.586,43.949l6.256-23.331a6.98,6.98,0,0,0,1.807.967L18.513,44.467a1,1,0,0,1-1.21.708l-.009,0h0A1.009,1.009,0,0,1,16.586,43.949ZM60,50.105a6.991,6.991,0,0,0-10,0V15a5,5,0,0,1,10,0Z" /><path d="M27,18a3,3,0,1,0-3-3A3,3,0,0,0,27,18Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,27,14Z" /></g></svg>
												</button>
												<p className="text-white text-xs">HLX Floor 11(b)</p>
											</div>
										</div>
										<div className="pl-4 flex w-full h-full">
											<div className="flex flex-col items-start">
												<p className="font-semibold text-3xl text-white">RM 67,000</p>
												<p className="text-white text-xs font-normal">This space suitable to accommodate small events. Ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deleniti error officiis voluptatem consequatur repellendus quas cum eum aspernatur a quidem culpa, aut iste fuga similique quasi iusto doloribus nam.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>}
		</LoadingOverlay>
	)
}

export default LoadedFloor;