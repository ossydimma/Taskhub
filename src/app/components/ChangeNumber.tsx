
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import { UserDetails } from "../../../mock";

export default function ChangeNumber({setShowChangeNumber ,}: {setShowChangeNumber: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [newNumber, setNewNumber] = useState<string>("");
    const [OTP, setOTP] = useState<string>(""); 
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [disableBtn, setDisableBtn] = useState<boolean>(true);

  return (
    <div>
        <div className=" pt-6 pb-12 px-10 md:px-6 xl:px-10 mx-2 absolute  left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-xl h-[33.5rem] md:h-auto top-3 md:top-8  w-[90%] md:w-[48%] rounded-2xl ">
              <section className="">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => {setShowChangeNumber(false)}}>
                  <svg
                    className="w-4"
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 561.803 561.802"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <polygon points="240.773,521.674 240.773,411.322 561.803,411.322 561.803,152.994 240.773,152.994 240.773,40.128 0,280.905 "></polygon>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span>Back</span>
                </div>
                <h1 className="text-xl xs:text-2xl md:text-xl xl:text-2xl text-center font-semibold font-serif py-2">
                  Change Phone Number
                </h1>
              </section>

                <form action="" className="flex flex-col gap-4 w-full border-t-2 border-gray-500 border-dashed rounded-md px-4 py-1">
                    <p className="text-red-500">{errorMessage}</p>
                    <div>
                        <p className="text-sm xs:text-xl md:text-lg xl:text-xl font-semibold mb-2">Current Phone Number:</p>
                        <div className=" border-2 border-gray-500 rounded-md px-3 py-2">{UserDetails.PhoneNumber}</div>
                    </div>

                    <div className="flex flex-col gap-2 ">

                      <label htmlFor="new-phone-number" className="font-semibold text-sm xs:text-xl md:text-lg xl:text-xl">
                        New Phone Number:
                        </label>
                        <PhoneInput
                            country={'us'}
                            value={newNumber}
                            
                            onChange={(phone) =>{ setNewNumber(phone); console.log(newNumber)}}
                            inputStyle={{
                            width: '100%',
                            height: '45px',
                            borderRadius: '5px',
                            border: '2px solid #7b7878',
                            padding: '10px',
                            paddingLeft: '4rem',
                            fontSize: '16px',
                            }}
                        />
                        
                    </div>
                    <p className="text-[0.9rem] font-bold text-gray-500 -mb-1 mt-1">A verification code will be sent you via WhatsApp or SMS.</p>
                    <div className=" flex items-center">
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            disabled={newNumber.length < 6}
                            value={OTP}
                            onChange={(e) => {setOTP(e.target.value); setDisableBtn(e.target.value.length < 4)}}
                            placeholder="Enter OTP"
                            className="  outline-none w-[80%] rounded-l-md  border-2 border-r-0 border-gray-500 h-[2.8rem] px-3"
                        /> 
                        <button className={ `${newNumber.length < 6 ? "bg-gray-400" : "bg-black" } text-white w-[20%] h-[2.8rem] rounded-r-md text-sm`}>Get Code</button>
                    </div>
                     
                    <div className={`${disableBtn ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-white hover:text-black border-2 border-black"} ml-auto text-white font-semibold text-lg px-8 py-2 rounded-lg mt-2 w-fit`} >
                        <button disabled={disableBtn} className={`${disableBtn ? "cursor-not-allowed" : "cursor-pointer"}`} type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
    </div>
  )
}
