'use client';

import { tasks, categories } from "./mock";
import ModifyTask from "../components/modifyTask";
import { useState } from "react";
import { UserTask } from "../../../Interfaces";

export default function page() {

  const [displayMoreOptions, setDisplayMoreOptions] = useState<boolean>()
  const [selectedTask, setSelectedTask] = useState<undefined | UserTask>(
    undefined
  );
  const [option, setOption] = useState<
      "Details" | "Edit" | "Delete" | undefined
    >(undefined);
    

  const handleSelectedTask = (id : string, SelectedOption : "Details" | "Edit" | "Delete"  ) => {
    setSelectedTask(tasks.find(task => task.Id == id));

    if (selectedTask !== undefined) {
      setDisplayMoreOptions(true);
      setOption(SelectedOption)
    }else {
      console.log(`task ${id} not found`);
    }

    console.log(selectedTask)

  }
  
  return (
    <main className="text-xs xs:text-sm md:text-[1rem] border-gray-500 ">
      <section className="flex justify-between items-center px-6 mt-5 lmd:mt-8 -mb-2 border-b-2 border-dashed border-gray-500 pb-4">
        <div className=" flex gap-2 items-center text-sm">
          <div className="py-2 px-4 bg-black text-white rounded-md cursor-pointer">
            All Tasks
          </div>
        </div>

        <div className=" w-[40%] lg:w-[45%] flex items-center justify-between  px-3.5 border border-gray-600 rounded-3xl ">
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

        <div className="flex items-center gap-3">
          <div className=" border text-sm border-gray-600 rounded-md py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white stroke-black hover:stroke-white">
            <svg
              className="w-4"
              viewBox="-0.5 0 25 25"
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
                <path
                  d="M22 3.58002H2C1.99912 5.28492 2.43416 6.96173 3.26376 8.45117C4.09337 9.94062 5.29 11.1932 6.73999 12.09C7.44033 12.5379 8.01525 13.1565 8.41062 13.8877C8.80598 14.6189 9.00879 15.4388 9 16.27V21.54L15 20.54V16.25C14.9912 15.4188 15.194 14.599 15.5894 13.8677C15.9847 13.1365 16.5597 12.5178 17.26 12.07C18.7071 11.175 19.9019 9.92554 20.7314 8.43988C21.5608 6.95422 21.9975 5.28153 22 3.58002Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Filter
          </div>

          {/* <div className="hidden border text-sm border-gray-600 rounded-md py-2 px-2.5 xs:flex items-center gap-1 cursor-pointer hover:bg-black hover:text-white stroke-black hover:stroke-white">
            <svg
              className="w-5"
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
                <path
                  d="M6 12H18M12 6V18"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <p>New Task</p>
          </div> */}
        </div>
      </section>

      <section className="h-[85vh] w-[98%] md:h-[90vh] overflow-hidden pt-4 mx-2  mb-[3rem] overflow-y-hidde">
        <div className="w-full h-[90%] pb-10 overflow-y-hidde ">
          <div className="grid grid-cols-7 gap-4 font-bold py-2 border-b-2 border-gray-500 mr-4">
            {categories.map((category) => (
              <h1
                className={`border-gray-400 p-2 text-center ${
                  category === "Description" ? "col-span-2" : ""
                }`}
              >
                {category}
              </h1>
            ))}
          </div>
          <div className="h-[100%] overflow-y-scroll pb-6">
            {tasks.map((task) => (
              <ul key={task.Id} className="grid grid-cols-7">
                <li className="border border-gray-400 text-center py-10 sm:py-7">
                  {task.Category}
                </li>
                <li className="border border-gray-400 text-center py-10 sm:py-7">
                  {task.Title}
                </li>
                <li className="text-xs md:text-sm col-span-2 border border-gray-400 px-1 sm:px-2 py-2.5 sm:py-4">
                  {task.Description.length > 95
                    ? task.Description.substring(0, 98) + `...`
                    : task.Description}
                </li>
                <li className="border border-gray-400 text-center py-10 sm:py-7">
                  {task.Deadline.toDateString()}
                </li>
                <li
                  className={`border border-gray-400 text-center py-10 sm:py-7 ${
                    task.Status === true ? "text-green-500" : "text-orange-600"
                  }`}
                >
                  {task.Status === true ? `Completed` : `Pending`}
                </li>
                <li className=" text-center py-10 sm:py-7 tooltip-container border border-gray-400 cursor-pointer">
                    <div className="tooltip">
                        <span>Options</span>    
                        <div className="tooltiptext text-sm">
                            <ul>
                                <li onClick={() => handleSelectedTask(task.Id, "Details")}>Details</li>
                                <li onClick={() => handleSelectedTask(task.Id, "Edit")}>Edit</li>
                                <li onClick={() => handleSelectedTask(task.Id, "Delete")} >Delete</li>
                            </ul>
                        </div>
                    </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
      { displayMoreOptions && <ModifyTask option={option} setOption={setOption} selectedTask={selectedTask} setSelectedTask={setSelectedTask} setDisplayMoreOptions={setDisplayMoreOptions} />}
    </main>
  );
}
