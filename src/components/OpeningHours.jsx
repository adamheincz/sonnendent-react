import { useState } from "react";
import { OPENING_HOURS } from "../assets/data";
import { motion } from "motion/react"
import { div } from "motion/react-client";

const WEEK_DAYS = [
    "Hétfő",
    "Kedd",
    "Szerda",
    "Csütörtök",
    "Péntek",
    "Szombat",
    "Vasárnap"
]

export default function OpeningHours() {

    const [selectedLocation, setLocation] = useState(OPENING_HOURS[0])

    function handleSelectLocation(item) {
        setLocation(item);
    }

    return (
        <div className="bg-white p-9 font-medium text-2xl rounded-3xl  shrink-0">
            <h2 className="mb-9">Nyitvatartás</h2>
            <ol className="flex bg-sd-light-blue p-1.5 rounded-full mb-6">
                {OPENING_HOURS.map((item, index) =>
                    <li
                        key={index}
                        className="relative cursor-pointer px-3 py-1.5 rounded-full"
                        onClick={() => handleSelectLocation(item)}
                    >
                        <span className="relative z-10">{item.location}</span>
                        {item === selectedLocation &&
                            <motion.div layoutId="selected-item" className="w-full h-full rounded-4xl absolute bg-white inset-0"></motion.div>
                        }
                    </li>

                )}
            </ol>
            <table className="w-full">
                <tbody>
                    {WEEK_DAYS.map((day, index) =>
                        <tr key={day}>
                            <td className="pr-16">{day}</td>
                            <td className="text-center w-fit">{selectedLocation.hours[index]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}