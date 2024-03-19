import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../util";
import GlobalContext from "../context/GobalContext";
import DayEvents from "./DayEvents";

export default function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [dayEvents, setDayEvents] = useState([]);
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const {
        monthIndex,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        savedEvents,
        toDayEvents,
        setToDayEvents,
    } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }
    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    function getDayClass(day) {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcday = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return "bg-dark_blue rounded-full text-white";
        } else if (currDay == slcday) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold";
        } else {
            return "";
        }
    }
    return (
        <div className="mt-6 mb-4 p-3 px-4">
            <header className="flex justify-between ">
                <button onClick={handlePrevMonth}>
                    <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-3">
                        chevron_left
                    </span>
                </button>
                <p className="text-dark_blue font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                        "MMMM YYYY"
                    )}
                </p>

                <button onClick={handleNextMonth}>
                    <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-3">
                        chevron_right
                    </span>
                </button>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format("ddd")}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button
                                key={idx}
                                className={`py-1 w-full ${getDayClass(day)}`}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIdx);
                                    setDaySelected(day);

                                    const events = savedEvents.filter(
                                        (evt) =>
                                            dayjs(evt.day).format(
                                                "DD-MM-YY"
                                            ) === day.format("DD-MM-YY")
                                    );
                                    console.log(events);
                                    // setDayEvents(events);
                                    setToDayEvents(events);
                                    // console.log(dayEvents)
                                }}
                            >
                                <span className="text-sm">
                                    {day.format("D")}
                                </span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
