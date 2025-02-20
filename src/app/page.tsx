'use client'
import TimeTracker from "./components/TimeTracker";
import Calendar from "react-calendar";
import Header from "./components/header";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <main className="text-black">
      <Header />
      <div className=" flex justify-center items-center border-dashed border-gray-500 border-b-2 pb-[2vh] pt-[-2vh]">
        <div className=" w-[60%] md:w-[50%] lg:w-[45%] flex sm:hidden items-center justify-between  px-3.5 border border-gray-600 rounded-3xl  ">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] bg-inherit py-2 outline-none"
          />
          <svg
            className="w-7 cursor-pointer "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g clipPath="url(#clip0_15_152)">
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#000000"
                  strokeLinejoin="round"
                ></circle>
                <path
                  d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                  fill="#000000"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_15_152">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </g>
          </svg>
        </div>
      </div>
      <div className=" flex justify-between flex-col gap-8 md:gap-2 md:flex-row mt-[2.5vh] sm:mt-[3.5vh]  px-3 z-50">
        <section className="  w-[100%] md:w-[65%] md:mx-8">
            {/* @if (IsAuthenticated)
            { */}
                <div className=" flex flex-wrap gap-2 md:gap-4 justify-between items-center text-xs xs:text-sm text-white ">

                    <div className=" text-center flex-1 w-[calc(1/3-1rem)] p-3 bg-black rounded-2xl border ">
                        <h2 className="font-semibold">All Tasks</h2>
                        <p>3000</p>
                    </div>

                    <div className=" text-center flex-1 w-[calc(1/3-1rem)] p-3 bg-black rounded-2xl border ">
                        <h2 className="font-semibold">Pending Tasks</h2>
                        <p>3000</p>
                    </div>

                    <div className=" text-center flex-1 w-[calc(1/3-1rem)] p-3 bg-black rounded-2xl border ">
                        <h2 className="font-semibold">Complete Tasks</h2>
                        <p>3000</p>
                    </div>

                </div>

                 {/* ------------ LEFT CONTENT ----------------  */}


                <div className="mt-8 mx-2 md:mx-8">
                    <div className="flex justify-between items-center text-black mb-4 font-serif">
                        <h2 className="font-bold text-2xl">Today's Task</h2>
                        <p className=" text-right text-lg font-medium cursor-pointer">view all</p>
                    </div>

                    <div className=" flex flex-col gap-4  ">
                        <div className="pt-7 px-6 shadow-lg border-gray-400 border-t-2">
                            <p className=" font-semibold text-lg">Landing PageTitle Agency Creative</p>
                            <p className="text-sm font-medium mb-2">work project</p>

                            <div className="flex items-center justify-between border-gray-400  border-t-2 py-4">
                                <p className="font-semibold">10:00 - 12:30 am</p>
                                <div className="px-4 py-2 rounded-xl text-white bg-black cursor-pointer">On
                                    Progress</div>
                            </div>
                        </div>

                        <div className="pt-7 px-6 shadow-lg border-gray-400 border-t-2">
                            <p className=" font-semibold text-lg">Landing PageTitle Agency Creative</p>
                            <p className="text-sm font-medium mb-2">personal project</p>

                            <div className="flex items-center justify-between border-gray-400  border-t-2 py-4">
                                <p className="font-semibold">10:00 - 12:30 am</p>
                                <div className="px-4 py-2 rounded-xl text-white bg-black cursor-pointer">
                                    Completed</div>
                            </div>
                        </div>
                    </div>


                </div>

            {/* // } */}
            {/* else
            {
                <div className="flex justify-center items-center mt-[30%]">
                    <div className=" flex items-center gap-5 ">
                        <div className="p-2 rounded-lg bg-[#5577FF]">
                            <svg className="w-10" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <defs>
                                        <style>
                                            .cls-1 {
                                                fill: #fff;
                                            }

                                            .cls-2 {
                                                fill: none;
                                            }
                                        </style>
                                    </defs>
                                    <title>logo--tumblr</title>
                                    <path className="cls-1"
                                        d="M22.6,28h-4c-3.59,0-6.3-1.86-6.3-6.3V14.58H9V10.72A7.17,7.17,0,0,0,14.3,4h3.76v6.12h4.36v4.46H18.06v6.2c0,1.86.94,2.49,2.42,2.49H22.6Z">
                                    </path>
                                    <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-2"
                                        width="32" height="32"></rect>
                                </g>
                            </svg>
                        </div>
                        <h2 className=" md:text-[1rem] lg:text-[4rem] font-serif font-extrabold">Taskhub</h2>
                    </div>
                </div>

            } */}

        </section>

         {/* ------------ RIGHT CONTENT ----------------  */}
        <section className="w-[100%] md:w-[33%]">
          <Calendar
                // onChange={handleDateChange}
              value={date}
              className=" py-3 px-4 rounded-2xl  mx-2 md:mx-0" // Custom class for styling
            />
            <TimeTracker />
        </section>
    </div>
    </main>
  );
}
