import React, { useState } from "react";
import Fload from "./Fload";
import LoadedFloor from "./LoadedFloor";

const Dashboard = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [floorLoaded, setfloorLoaded] = useState(false)

  const loadPlan = async () => {
    setIsDisable(true)
    setfloorLoaded(true);
  }

  return (
    <div className="flex flex-col bg-deep h-full">
      <div class="lg:flex lg:items-center lg:justify-between p-4 shadow-lg">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
            The HLX - Floor 11
        </h2>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
            <div class="mt-2 flex items-center text-sm leading-5 text-red-600 sm:mr-6">
              {/* <!-- Heroicon name: location-marker --> */}
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Menara HLX, Jalan Kia Peng, 50450 Kuala Lumpur
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:mt-0 lg:ml-4">

          <span class="sm:ml-3 shadow-sm rounded-md">
            {isDisable ?
              <button type="button" className="opacity-50 cursor-not-allowed inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
                {/* <!-- Heroicon name: check --> */}
              Published
            </button> :
              <button onClick={() => {
                loadPlan();
              }} type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
                {/* <!-- Heroicon name: check --> */}
                <svg class="z-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              Publish
            </button>}
          </span>
          {/* <!-- Dropdown --> */}
          <span class="ml-3 relative shadow-sm rounded-md sm:hidden">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" id="mobile-menu" aria-haspopup="true">
              More
        {/* <!-- Heroicon name: chevron-down --> */}
              <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg" aria-labelledby="mobile-menu" role="menu">
              <div class="py-1 rounded-md bg-white shadow-xs">
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Edit</a>
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">View</a>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="items-center align-center">
        {floorLoaded ? <LoadedFloor /> : <Fload />}
      </div>

    </div>
  )
}

export default Dashboard;