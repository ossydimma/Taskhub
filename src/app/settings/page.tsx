

export default function page() {
return(
  <div className="px-10 pt-7 pb-20 md:pb-0 w-full h-auto md:h-full">
    <h1 className=" w-full text-center font-serif text-3xl font-bold border-b-2 border-gray-400 border-dashed pb-2 mb-4 md:mb-8">Settings</h1>
    <div className="px-8 pt-20">
      <ul className="flex flex-col gap-6">
        <li className="flex justify-between border-b-2 border-gray-600 pb-4 cursor-pointer hover:border-b-4 ">
          <span className="font-semibold text-xl">Username</span>
          <svg
            className="w-8 h-8"
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
              {" "}
              <path
                d="M10 7L15 12L10 17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </li>

        <li className="flex justify-between border-b-2 border-gray-600 pb-4 cursor-pointer hover:border-b-4">
        <span className="font-semibold text-xl">Email</span>
          <svg
            className="w-8 h-8"
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
              {" "}
              <path
                d="M10 7L15 12L10 17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </li>

        <li className="flex justify-between border-b-2 border-gray-600 pb-4 cursor-pointer hover:border-b-4">
        <span className="font-semibold text-xl">Login password</span>
          <svg
            className="w-8 h-8"
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
              {" "}
              <path
                d="M10 7L15 12L10 17"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </li>

      </ul>
    </div>
  </div>
    )
};
