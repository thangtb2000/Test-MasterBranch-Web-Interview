// import React from 'react'
import CreateEventButton from "./CreateEventButton";
import DayEvents from "./DayEvents";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";
export default function Sidebar() {
    return (
        <div>
            <aside className="border w-80 bg-slate-50 ">
                <div className="flex justify-center mt-2">
                <CreateEventButton />
                </div>
                <SmallCalendar />
                <hr />
                <DayEvents />
                {/* <Labels/> */}
            </aside>
        </div>
    );
}
