'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
// import './CalendarComponent.css'; // Import custom styles

const CalendarComponent = () => {
    

    // const handleDateChange = (newDate) => {
    //     setDate(newDate);
    // };

    return (
        <div className="calendar-containe ">
            {/* <Calendar
                // onChange={handleDateChange}
                value={date}
                className=" py-3 px-4 rounded-2xl  mx-2 md:mx-0" // Custom class for styling
            /> */}
        </div>
    );
};

export default CalendarComponent;


// 'use client'
// import { useEffect, useState } from "react";

// export default function calendar() {
//     const days : string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

//     const [currentDate, isCurrentDate] = useState<Date>(new Date())

//     // const daysInMonth = (month : number, year : number) => {
//     //     return new Date(year, month + 1, 0).getDate();
//     // };

//     // const getFirstDayOfMonth = (month, year) => {
//     //     return new Date(year, month, 1).getDay();
//     // };
//     // Get the first day of the month
//     const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//     const daysInMonth = new Date (currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     const isToday = (date : Date) => date.getDate() === currentDate.getDate();
//     const isCurrentMonth = (date : Date) => date.getMonth() === currentDate.getMonth();

//     const getCalendar = () => {
//         const month = currentDate.getMonth();
//         const year = currentDate.getFullYear();
//         // const days = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
//         // const firstDay = firstDay(month, year);

//         const calendarDays = [];

//         // const prevMonthDays = daysInMonth(month - 1 < 0 ? 11 : month - 1, month - 1 < 0 ? year - 1 : year);
        
//         // Add empty slots for days before the first day of the month
//         // for (let i = 0; i < prevMonthDays; i++) {
//         //     calendarDays.push(<div className="text-[#9ca3af]" key={`empty-${i}`}>{i}</div>);
//         // }
        
//         // Add the actual days of the month
//         for (let day = 1; day <= daysInMonth; day++) {
//             calendarDays.push(
//                 <div className={`day py-0.5 px-1 text-white`} key={day}>
//                     {day}
//                 </div>
                
//             );
//         }

//                 // Add days from the next month
//         const totalDaysDisplayed = calendarDays.length;
//         const daysToFill = 42 - totalDaysDisplayed; // 6 rows * 7 days
//         for (let day = 1; day <= daysToFill; day++) {
//             calendarDays.push(
//                 <div className="day next-month" key={`next-${day}`}>
//                     {day}
//                 </div>
//             );
//         }

//         return calendarDays;
//     }

//     const GetDateClasses = (date : Date) => {
//         let classes : string;
//         if (isToday(date)) {
//             classes = "bg-[#fff] text-black font-bold rounded-full";

//         } else if (isCurrentMonth(date)) {
//             classes = " text-white";
//         } else {
//             classes = "text-[#9ca3af]";
//         }

//         return classes;
            
//     }

//     useEffect(()=> {



//         console.log(`currentDate: ${currentDate}, firstDay: ${firstDay}, daysInMonth: ${daysInMonth}`);
//     }, [] )
        

//   return (
//     <main className="bg-[#000]  py-3 px-4 rounded-2xl  mx-2 md:mx-0">
//         <div className="  grid grid-cols-7 gap-2 text-center">
//             {
//                 days.map((day)=> (
//                     <div className="font-bold text-white py-0.5 px-1">{day}</div>
//                 ))
//             }

//         </div>
//         <div className=" grid grid-cols-7 gap-2 text-center">
//             {getCalendar()}
//         </div>
    
//     </main>
   
//   )
// }
