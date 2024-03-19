import React, { useContext } from "react";
import GlobalContext from "../context/GobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }

    return (
        <>
            <header className="px-7 py-4 flex items-center justify-between ">
                <div className="flex items-center">
                    <button
                        onClick={handleReset}
                        className="border-2 border-light_blue rounded-xl py-2 px-4 mr-5"
                    >
                        Today
                    </button>
                    <button onClick={handlePrevMonth}>
                        <span className="material-symbols-outlined cursor-pointer text-dark_blue mx-2">
                            chevron_left
                        </span>
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="text-dark_blue"
                    >
                        <span className="material-symbols-outlined cursor-pointer text-dark_blue mx-2">
                            chevron_right
                        </span>
                    </button>
                    <h2 className="ml-4 text-xl text-dark_blue font-bold">
                        {dayjs(new Date(dayjs().year(), monthIndex)).format(
                            "MMMM YYYY"
                        )}
                    </h2>
                </div>

                <select
                    name="filter"
                    id="filter"
                    className="border bg-light_blue p-2 rounded-xl text-white text-center"
                >
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </header>
        </>
    );
}
