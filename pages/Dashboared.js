import React from "react";
import Sidenav from "../components/sidebar/Sidenav";

function Dashboared() {
  return (
    <div className="bg-red-50 h-screen ">
      <Sidenav />
      <div className="  lg:pl-[250px] xl:pl-[300px] 2xl:pl-[350px] 3xl:pl-[350px] ">
        <h1 className="bg-red-50  pl-2 pb-2    text-3xl  text-black pt-2">
          Welcome to the Dashboared 💫
        </h1>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-2   bg-red-50 pt-2 pr-5">
          <div>
            <a class="block ml-4  max-w-5xl min-w-[100px]  p-6 bg-white text-black border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] hover:text-white   ">
              <h5 class="mb-2 text-center  text-2xl font-bold tracking-tight  ">
                OPENINGS
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 hover:text-white ">
                3
              </p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-5xl min-w-[100px]  p-6 bg-white text-black border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] hover:text-white   ">
              <h5 class="mb-2 text-center  text-2xl font-bold tracking-tight  ">
                CONTACT
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 hover:text-white ">
                3
              </p>
            </a>
          </div>

          <div>
            <a class="block ml-4  max-w-5xl p-6 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 class="mb-2 text-center  text-2xl font-bold tracking-tight ">
                TEAMS
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-5xl p-6 min-w-[200px]  bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 class="mb-2 text-center  text-2xl font-bold tracking-tight ">
                BLOGS
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-5xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 class="mb-2 text-center  text-2xl font-bold tracking-tight ">
                LIFE AT 1k
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-5xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight capitalize">
                FOUNDERS
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-5xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight capitalize">
                SUBSCRIBE
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-4xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight capitalize">
                NEWS ROOM
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-4xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight capitalize">
                F . A . Q
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
          <div>
            <a class="block ml-4  max-w-4xl p-6 min-w-[100px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-[#F1AC33] text-black hover:text-white">
              <h5 className="mb-2 text-center  text-2xl font-bold tracking-tight capitalize">
                BRANDS
              </h5>
              <p class="font-normal text-xl text-center text-gray-700 ">10</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboared;
