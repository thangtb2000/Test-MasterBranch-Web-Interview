import React from "react";
import avt from "../assets/avt.png";
import "../App.css";
export default function CardEvent({event}) {
    console.log(event);
    
    return (
        <div classNameName="card-event card m-3 p-2 ">
            <div className="card-event m-3 text-left bg-light_orange p-2 rounded-lg max-w-sm shadow-lg flex flex-col items-start">
                <div className="flex justify-between w-full m-0 p-0">
                    <div>
                        <p className="text-sm font-medium text-dark_blue">
                            {event.title}
                        </p>
                        <p className="text-xs font-thin mt-2 text-blue-500">
                            9:00 AM - 09:30 AM GMT+8
                        </p>
                    </div>
                    <button>
                        <span className="material-symbols-outlined mb text-slate-50 font-thin bg-dark_blue rounded-full p-2 pr-2">
                            videocam
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-2">
                    <img
                        src={avt}
                        className="card-img w-9 h-9 rounded-full mr-2"
                    />
                    <a href="#" className="text-blue-500 text-xs font-thin">
                        View Client Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
