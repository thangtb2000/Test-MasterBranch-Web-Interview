import React, { useContext } from "react";
import CardEvent from "./CardEvent";
import GlobalContext from "../context/GobalContext";

export default function DayEvents() {
    const {
        toDayEvents,
        setToDayEvents,
    } = useContext(GlobalContext);
    console.log(toDayEvents)
    return (
        <div>
            <div className="p-3 mb-2 flex items-center justify-between">
                <div className="text-left">
                    <h2 className="font-bold text-xl text-dark_blue">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-400 font-bold">Today, 4Apr</p>
                </div>
                <button className="border bg-dark_blue rounded-xl p-2 mb-2 text-white text-xs ">
                    View All
                </button>
            </div>
            <div>
            {toDayEvents.map((event, i) => (
                   <CardEvent  key={i} event={event} />
                ))}
             
            </div>
        </div>
    );
}
