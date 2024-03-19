// import React from "react";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GobalContext";
import "../App.css";
export default function Day({ day, rowIdx }) {
    const [dayEvents, setDayEvents] = useState([]);
    const {
        setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent,
        savedEvents,
    } = useContext(GlobalContext);

    useEffect(() => {
        const events = filteredEvents.filter(
            (evt) =>
                dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [filteredEvents, day]);

    function getCurrentDayClass() {
        return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
            ? "bg-dark_blue text-white rounded-full w-7"
            : "";
    }

    return (
        <div className="border border-gray-200 flex flex-col table_day ">
            <header className="flex flex-col items-center ">
                <p
                    className={`text-sm cursor-pointer p-1 my-1 text-center ${getCurrentDayClass()}`}
                >
                    {day.format("DD")}
                </p>
            </header>
            <div
                className="flex-1 cursor-pointer"
                onClick={() => {
                    setDaySelected(day);
                    // setShowEventModal(true);
                }}
            >
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleClickDayEvents(evt)}
                        className={`bg-${evt.label} p-1  text-gray-600 text-sm rounded mb-1 truncate`}
                    >
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
