import React, { useState } from "react";
import Day from "./Day";
import CalendarHeader from "./CalendarHeader";
import dayjs from "dayjs";
import { getMonth } from "../util";

export default function Month({ month }) {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <div className="flex-1 bg-slate-50">
            <CalendarHeader />
            <div className="h-10 flex-1 grid grid-cols-7 grid-rows-">
            {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format("ddd").toUpperCase()}
                    </span>
                ))}
                
            </div>
            <div className="flex-1 grid grid-cols-7 grid-rows-5 ">
                {month.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <Day
                                day={day}
                                key={idx}
                                rowIdx={i}
                                className="w-10"
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
