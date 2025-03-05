import SectionHeading from "./SectionHeading";
import { TREATMENTS } from "../assets/data";

export default function Treatments() {

    return (
        <>
            <SectionHeading
                title="Kezeléseink"
                description="Rendelőnk széleskörű fogászati kezeléseket kínál, amelyek minden páciens igényeihez igazodnak."
            />
            <div className="grid grid-cols-3 gap-4">
                {TREATMENTS.map(treatment =>
                    <div key={treatment.id} className="flex flex-col bg-sd-light-blue p-9 rounded-3xl">
                        <h2 className="text-4xl text-sd-blue font-semibold tracking-[-0.03em] mb-6">{treatment.title}</h2>
                        <p className="tracking-tighter">{treatment.description}</p>
                        <div className="flex items-center justify-center my-3 grow">
                            <img className="size-fit m-16 drop-shadow-md" src="src/assets/dental_equipment.png" alt="" />
                        </div>
                        <button className="w-full border-2 px-6 py-3 rounded-full font-medium text-sd-blue">Tudjon meg többet!</button>
                    </div>
                )}
            </div>
        </>
    );
}