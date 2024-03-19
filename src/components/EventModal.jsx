import React, { useContext, useState } from "react";
import GlobalContext from "../context/GobalContext";
const labelsClasses = ["light_orange", "light_blue"];

export default function EventModal() {
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
        useContext(GlobalContext);
    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );

    function handleSumit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        setShowEventModal(false);
    }
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-symbols-outlined">
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className="material-symbols-outlined cursor-pointer"
                            >
                                delete
                            </span>
                        )}
                        <button
                            onClick={() => setShowEventModal(false)}
                            className="bg-gray-100 px-4 py-2 flex justify-between items-center"
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            id="title"
                            type="text"
                            placeholder="Add title"
                            name="title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="flex ">
                            <span className="material-symbols-outlined ">
                                schedule
                            </span>
                            <p className="pl-3">
                                {daySelected.format("dddd, MMMM DD")}
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-left">
                            segment
                        </span>
                        <input
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            id="description"
                            type="text"
                            placeholder="Add description"
                            name="description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="flex">
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                            <div className="flex gap-x-2">
                                {labelsClasses.map((lblClass, i) => (
                                    <span
                                        key={i}
                                        onClick={() =>
                                            setSelectedLabel(lblClass)
                                        }
                                        className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                    >
                                        {selectedLabel === lblClass && (
                                            <span className="material-symbols-outlined">
                                                check
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="flex justify-end w-100 border-t p-3 mt-5 ">
                    <button
                        type="submit"
                        onClick={handleSumit}
                        className="bg-dark_blue  px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}
